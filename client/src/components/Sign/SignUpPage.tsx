import React from 'react';

function SignInForm(): JSX.Element {

    
    return (
        <main class="responsive fill medium-height middle-align center-align">
        <div class="center-align">
          <i class="extra">person</i>
          <h5>Пожалуйста введите данные для регистрации</h5>
          <div class="space"></div>
          <nav class="no-space">
            <div class="max field label border round">
              <input type='email'/>
              <label>e-mail</label>
            </div>
          </nav>
          <nav class="no-space">
            <div class="max field label border round">
              <input type='text'/>
              <label>Имя</label>
            </div>
          </nav>
          <nav>
            <div class="max field label border round">
              <input type='password'/>
              <label>Пароль</label>
            </div>
            </nav>
          <nav>
            <div class="max field label border round">
              <input type='password'/>
              <label>Повторите пароль</label>
            </div>
            </nav>
            <nav>
            <button class="max large round">Sign-up</button>
            </nav>
        </div>
      </main>
    );
}

export default SignInForm;