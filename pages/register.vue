<template>
  <div class="contact-page">
    <section id="message" class="form-section">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <h3>Please complete our form</h3>
            <form @submit.prevent="submitForm">       
               <div class="row">
                <div class="col">
                  <label for="email">EMAIL</label>
                  <input
                    type="text"
                    name="email"
                    v-model="email"
                    id="email"
                    class="field"
                    placeholder="Email"
                    required
                  />
                </div>
                <br>
                <div class="col">
                  <label for="lastname">Password</label>
                  <input
                    type="text"
                    name="password"
                    id="password"
                    class="field"
                    placeholder="Password"
                    v-model="password"
                    required
                  />
                </div>
              </div>
              <div class="row">
                <div class="col send-button-wrapper">
                  <button type="submit">Login</button>
                </div>
              </div>
            </form>
          </div>
        
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
const FORMSPARK_ACTION_URL = "http://localhost:4000/user/login";

import axios from "axios";
export default Vue.extend({
  head() {
    return {
      titleTemplate: '%s - Register',
    };
  },
  data() {
  return {
    form: {
      email: "",
      password: "",
    },
  };
},

methods: {
  async submitForm() {
  axios.post("http://localhost:4000/user/register",{email: this.email,password: this.password}).then(
                          (response) => {
                              console.log(response.data.success,'response')
                              if(response.data.success == true) { 
                                  // window.location
                                  this.$router.push('/login');
                                  
                              }
                              else{
                                  alert('invailed Details')
                                  this.$router.push('/opportunity');
                              }      
                          },
                          (error) => { console.log(error)}
                      )
  },
},

  
});
</script>

<style lang="scss" scoped>
.get-in-touch-section {
  display: flex;
  height: 500px;
  background: #0cabde url('~assets/images/contact/touch-bg.png') center/cover;

  .container {
    display: flex;
    align-items: center;
  }

  h2 {
    font-size: 3rem;
    font-weight: 600;
    color: white;
  }

  h3 {
    font-size: 1.4rem;
    color: white;
  }

  .button {
    font-size: 1.05rem;
    font-weight: 700;
    border-color: white;
    color: white;
    margin-top: 20px;

    &:hover {
      color: #2c4574;
      background-color: #fff;
    }
  }
}

.headquarter-section {
  display: flex;
  justify-content: center;
  margin-top: 50px;

  .headquarter-desc {
    font-size: 2.11rem;
    font-weight: 600;
    color: #2275c3;
    max-width: 550px;
    text-align: center;
  }
}

.email-section {
  display: flex;
  height: 300px;
  margin-top: 70px;
  background: #a7cae0 url('~assets/images/contact/email-bg.png') center/cover;

  .email-message {
    font-size: 1.54rem;
    color: #2275c3;
    margin-top: 50px;
  }

  .email {
    display: block;
    font-size: 2.275rem;
    color: #007fff;
  }
}

.form-section {
  padding-top: 50px;

  h3 {
    font-size: 1.86rem;
    font-weight: 600;
    color: #2275c3;
  }

  form {
    margin-top: 20px;

    .row {
      margin-top: 15px;
    }
  }

  label {
    display: block;
    font-size: 0.65rem;
    font-weight: 700;
    color: #707070;
    margin-bottom: 2px;
  }

  .field {
    width: 100%;
    padding: 13px 15px;
    border: 1px solid #707070;
    border-radius: 10px;

    &:focus {
      outline: none;
    }

    &::placeholder {
      font-weight: 600;
      color: #ebebeb;
    }
  }

  .send-button-wrapper {
    text-align: right;
  }

  .button {
    font-size: 1rem;
    text-transform: uppercase;
    padding: 7px 25px;
    background-color: #fff;

    &:hover {
      background-color: #2c4574;
    }
  }

  .image-wrapper img {
    width: 100%;
  }
}

.map-section {
  height: 300px;
  margin-top: 80px;
  background: #1f2d4b url('~assets/images/contact/map.png') center/cover;
}
</style>
