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
              '<input class="form-control" placeholder="Email Address" autofocus="autofocus" type="email" value="" name="user[email]" id="user_email">' +
              '<small class="form-text style-link" onclick="renderField(\'confirmable\')">Resend Confirmation Email</small>' +
            '</div>' +
            '<div class="actions">' +
              '<input class="btn btn-primary submit" type="submit" name="commit" value="Send Recovery Email" data-disable-with="Send Recovery Email">' +
            '</div>' +
          '</form>',
    Footer: '<small class="form-text text-muted">Don\'t have an account? <span class="style-link" onclick="renderField(\'newAccount\')">Sign up</span></small>' +
            '<small class="form-text text-muted">Already have an account? <span class="style-link" onclick="renderField(\'signIn\')">Sign in</span></small>'
  },

  'newAccount': {
    LongTitle: 'Create Account',
    Body: '<form class="new_user" id="new_user" action="/users" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="✓"><input type="hidden" name="authenticity_token" value="BQYmqJh7THJLy+sx5f5WH8KwQSVZfReto4FzsBnHYGxyDfzl/pKYMUyIeh6z35imVCFiSKG+SduSDSAUqHvmcA==">' +
            '<div class="field form-group">' +
              '<input class="form-control" placeholder="Email Address" autofocus="autofocus" type="email" value="" name="user[email]" id="user_email">' +
            '</div>' +
            '<div class="field form-group">' +
              '<input class="form-control" placeholder="Password" autocomplete="off" type="password" name="user[password]" id="user_password" onfocus="displayTooltip()" onblur="removeTooltip()">' +
              '<div class="tooltip bs-tooltip-right" role="tooltip" id="password-reqs">' +
                '<div class="arrow"></div>' +
                '<div class="tooltip-inner">' +
                  '<ul>' +
                    '<li><em>At least 6 characters</em></li>' +
                    '<li><em>One uppercase letter</em></li>' +
                    '<li><em>One lowercase letter</em></li>' +
                    '<li><em>One number letter</em></li>' +
                  '</ul>' +
                '</div>' +
              '</div>' +
            '</div>' +
            '<div class="field form-group">' +
              '<input class="form-control" placeholder="Password Confirmation" autocomplete="off" type="password" name="user[password_confirmation]" id="user_password_confirmation">' +
            '</div>' +
            '<div class="actions">' +
              '<input class="btn btn-primary submit" type="submit" name="commit" value="Register" data-disable-with="Register">' +
            '</div>' +
          '</form>',
    Footer: '<small class="form-text text-muted">Already have an account? <span class="style-link" onclick="renderField(\'signIn\')">Sign in</span></small>'
  }
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
