<template>
  <div>
   <h1>Register</h1>
   <input
     type="text"
     name="name"
     v-model="name"
     placeholder="name" />
     <br>
   <input
     type="text"
     name="email"
     v-model="email"
     placeholder="email" />
     <br>
    <input
     type="password"
     name="password"
     v-model="password"
     placeholder="password" />
     <br>
    <input
     type="password"
     name="passwordConfirm"
     v-model="passwordConfirm"
     placeholder="passwordConfirm" />
     <br>
     <button @click="register">Register</button>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  name: 'Register',
  data () {
    return {
      name: '',
      email: '',
      password: '',
      passwordConfirm: '',
      error: null

    }
  },
  methods: {
    async register () {
      // console.log('register button was clicked', this.email, this.password)
      const response = await AuthenticationService.register({
        name: this.name,
        email: this.email,
        password: this.password,
        passwordConfirm: this.passwordConfirm
      })
      console.log(response.data)
    }
  }
}
</script>
