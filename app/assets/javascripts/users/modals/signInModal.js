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
            '</div>' +
            '<div class="field form-check">' +
              '<input class="form-check-input" name="user[remember_me]" type="hidden" value="0"><input type="checkbox" value="1" name="user[remember_me]" id="user_remember_me">' +
              '<label class="form-check-label" for="user_remember_me">Remember me</label>' +
            '</div>' +
            '<div class="actions">' +
              '<input class="btn btn-primary submit" type="submit" name="commit" value="Go" data-disable-with="Log in">' +
            '</div>' +
          '</form>' +
          '<small id="sign-up-cta" class="form-text style-link" onclick="renderField(\'confirmable\')">Didn\'t receive confirmation instructions?</small>' +
          '<small id="sign-up-cta" class="form-text style-link" onclick="renderField(\'lockable\')">Didn\'t receive unlock instructions?</small>',
  Footer: '<small id="sign-up-cta" class="form-text text-muted">Don\'t have an account? <span class="style-link" onclick="renderField(\'newAccount\')">Sign up</span></small>'
  },

  'forgotPassword': {
    LongTitle: 'Forgot Your Password?',
    Body: '<form class="new_user" id="new_user" action="/users/password" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="✓"><input type="hidden" name="authenticity_token" value="G6L8/0QITGObq2cXmfG2G2jhClkJQj+f/av22xEV2JuTF4QWkwYTTs3ssCBv6pitJswXdUl0NQWZKQdJ89RkOg==">' +
            '<div class="field form-group">' +
              '<label for="user_email">Enter your email address, and we\'ll send you a recovery link.</label>' +
              '<input class="form-control" placeholder="Email Address" autofocus="autofocus" type="email" value="" name="user[email]" id="user_email">' +
            '</div>' +
            '<div class="actions">' +
              '<input class="btn btn-primary submit" type="submit" name="commit" value="Send Recovery Email" data-disable-with="Send Recovery Email">' +
            '</div>' +
          '</form>',
    Footer: ''
  }
}

const renderField = (type) => {
  Object.keys(fields[type]).forEach((key) => {
    document.getElementById(`signInModal${key}`).innerHTML = fields[type][key]
  })
}
