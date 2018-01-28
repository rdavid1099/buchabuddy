const fields = {
  'signIn': {
    LongTitle: 'Sign In',
    Body: '<form class="new_user" id="new_user" action="/users/sign_in" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="✓"><input type="hidden" name="authenticity_token" value="hrST46EdFtOvaAhVhKJulsMELHjEKyipL3mO0/V+hYCrpt2DYgVlxJTzi1KHXHKr3jCTk3/RPxsdfve3TTed/g==">' +
            '<div class="field form-group">' +
              '<input class="form-control" autofocus="autofocus" type="email" placeholder="Email Address" value="" name="user[email]" id="user_email">' +
            '</div>' +
            '<div class="field form-group">' +
              '<input class="form-control" autocomplete="off" type="password" placeholder="Password" name="user[password]" id="user_password">' +
              '<small class="form-text style-link" onclick="renderField(\'forgotPassword\')">Forgot your password?</small>' +
              '<small class="form-text style-link" onclick="renderField(\'confirmable\')">Resend Confirmation Email</small>' +
            '</div>' +
            '<div class="actions">' +
              '<input class="btn btn-primary submit" type="submit" name="commit" value="Go" data-disable-with="Log in">' +
            '</div>' +
          '</form>',
  Footer: '<small class="form-text text-muted">Don\'t have an account? <span class="style-link" onclick="renderField(\'newAccount\')">Sign up</span></small>'
  },

  'forgotPassword': {
    LongTitle: 'Forgot Your Password?',
    Body: '<form class="new_user" id="new_user" action="/users/password" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="✓"><input type="hidden" name="authenticity_token" value="G6L8/0QITGObq2cXmfG2G2jhClkJQj+f/av22xEV2JuTF4QWkwYTTs3ssCBv6pitJswXdUl0NQWZKQdJ89RkOg==">' +
            '<div class="field form-group">' +
              '<label for="user_email">Enter your email address, and we\'ll send you a recovery link.</label>' +
              '<input class="form-control" placeholder="Email Address" autofocus="autofocus" type="email" value="" name="user[email]" id="user_email" onkeyup="checkEmail(event, evaluateSubmitValidity, true, 2)" onblur="checkEmail(event, evaluateSubmitValidity, true, 2)">' +
              '<div class="errors"></div>' +
              '<small class="form-text style-link" onclick="renderField(\'confirmable\')">Resend Confirmation Email</small>' +
            '</div>' +
            '<div class="actions" style="pointer-events: none;">' +
              '<input class="btn btn-primary submit disabled" id="submit" type="submit" name="commit" value="Send Recovery Email" data-disable-with="Send Recovery Email">' +
            '</div>' +
          '</form>',
    Footer: '<small class="form-text text-muted">Don\'t have an account? <span class="style-link" onclick="renderField(\'newAccount\')">Sign up</span></small>' +
            '<small class="form-text text-muted">Already have an account? <span class="style-link" onclick="renderField(\'signIn\')">Sign in</span></small>'
  },

  'newAccount': {
    LongTitle: 'Create Account',
    Body: '<form class="new_user" id="new_user" action="/users" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="✓"><input type="hidden" name="authenticity_token" value="BQYmqJh7THJLy+sx5f5WH8KwQSVZfReto4FzsBnHYGxyDfzl/pKYMUyIeh6z35imVCFiSKG+SduSDSAUqHvmcA==">' +
            '<div class="field form-group">' +
              '<input class="form-control" placeholder="Email Address" autofocus="autofocus" type="email" value="" name="user[email]" id="user_email" onkeyup="checkEmail(event, evaluateSubmitValidity)" onblur="checkEmail(event)">' +
              '<div class="errors"></div>' +
            '</div>' +
            '<div class="field form-group">' +
              '<input class="form-control" placeholder="Password" autocomplete="off" type="password" name="user[password]" id="user_password" onfocus="displayTooltip()" onblur="removeTooltip()" onkeyup="checkPassword(event, evaluateSubmitValidity)">' +
              '<div class="tooltip bs-tooltip-right" role="tooltip" id="password-reqs">' +
                '<div class="arrow"></div>' +
                '<div class="tooltip-inner">' +
                  '<ul id="password-reqs-list">' +
                    '<li><em>At least 6 characters</em></li>' +
                    '<li><em>One uppercase letter</em></li>' +
                    '<li><em>One lowercase letter</em></li>' +
                    '<li><em>One number</em></li>' +
                  '</ul>' +
                '</div>' +
              '</div>' +
              '<div class="errors"></div>' +
            '</div>' +
            '<div class="field form-group">' +
              '<input class="form-control" placeholder="Password Confirmation" autocomplete="off" type="password" name="user[password_confirmation]" id="user_password_confirmation" onkeyup="checkPasswordConfirm(event, evaluateSubmitValidity)" onblur="checkPasswordConfirm(event)">' +
              '<div class="errors"></div>' +
            '</div>' +
            '<div class="actions" style="pointer-events: none;">' +
              '<input class="btn btn-primary submit disabled" id="submit" type="submit" name="commit" value="Register" data-disable-with="Register">' +
            '</div>' +
          '</form>',
    Footer: '<small class="form-text text-muted">Already have an account? <span class="style-link" onclick="renderField(\'signIn\')">Sign in</span></small>'
  }
}

let signUpValidations = {
  email: false,
  password: false,
  passwordConfirm: false
}

const renderField = (type) => {
  Object.keys(fields[type]).forEach((key) => {
    document.getElementById(`signInModal${key}`).innerHTML = fields[type][key]
  })
}

const displayTooltip = () => {
  document.getElementById('password-reqs').classList.add('show')
}

const removeTooltip = () => {
  document.getElementById('password-reqs').classList.remove('show')
}

const checkEmail = (e, cb, onlyEmail, index) => {
  let $emailInput = e.currentTarget,
      i           = index || 1
  if ($emailInput.value) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test($emailInput.value)) {
      validate('email', $emailInput, i)
    } else {
      invalidate('email', $emailInput, 'Invalid email address', i)
    }
  } else {
    invalidate('email', $emailInput, 'Required', i)
  }
  if(cb) {cb(onlyEmail)}
}

const checkPassword = (e, cb) => {
  let $pwInput = e.currentTarget
  let $reqList = document.getElementById('password-reqs-list')
  if ($pwInput.value) {
    let validations = [($pwInput.value.length >= 6), (/[A-Z]/.test($pwInput.value)), (/[a-z]/.test($pwInput.value)), (/[0-9]/.test($pwInput.value))]
    if (!validations.includes(false)) {
      validate('password', $pwInput, 2)
    } else {
      invalidate('password', $pwInput, 'Password must meet all requirements', 2)
    }
    for (var i = 0; i < $reqList.children.length; i++) {
      if (validations[i]) {
        $reqList.children[i].classList.add('is-valid')
        $reqList.children[i].classList.remove('is-invalid')
      } else {
        $reqList.children[i].classList.add('is-invalid')
        $reqList.children[i].classList.remove('is-valid')
      }
    }
  } else {
    for (var i = 0; i < $reqList.children.length; i++) {
      $reqList.children[i].classList.add('is-invalid')
      $reqList.children[i].classList.remove('is-valid')
    }
    invalidate('password', $pwInput, 'Required', 2)
  }
  if(cb) {cb()}
}

const checkPasswordConfirm = (e, cb) => {
  let $pwConfirmInput = e.currentTarget,
      $pwInput        = e.target.parentElement.previousElementSibling.firstElementChild
  if ($pwConfirmInput.value) {
    $pwConfirmInput.value === $pwInput.value ? validate('passwordConfirm', $pwConfirmInput, 1) : invalidate('passwordConfirm', $pwConfirmInput, 'Passwords do not match', 1)
  } else {
    invalidate('passwordConfirm', $pwConfirmInput, 'Required', 1)
  }
  if(cb) {cb()}
}

const evaluateSubmitValidity = (onlyEmail) => {
  let $registerBtn = document.getElementById('submit')
  if ((signUpValidations.email && signUpValidations.password && signUpValidations.passwordConfirm) || (onlyEmail && signUpValidations.email)) {
    $registerBtn.classList.remove('disabled')
    $registerBtn.parentElement.style.pointerEvents = "all"
  } else {
    $registerBtn.classList.add('disabled')
    $registerBtn.parentElement.style.pointerEvents = "none"
  }
}

const validate = (field, input, index) => {
  input.classList.remove('is-invalid')
  input.classList.add('is-valid')
  input.parentElement.children[index].classList.remove('invalid-feedback')
  input.parentElement.children[index].innerText = ""
  signUpValidations[field] = true
}

const invalidate = (field, input, msg, index) => {
  input.classList.remove('is-valid')
  input.classList.add('is-invalid')
  input.parentElement.children[index].classList.add('invalid-feedback')
  input.parentElement.children[index].innerText = msg
  signUpValidations[field] = false
}
