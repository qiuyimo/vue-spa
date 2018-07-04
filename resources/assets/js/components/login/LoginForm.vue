<template>
    <form class="form-horizontal" @submit.prevent="login">
        <div class="form-group">
            <label for="email" class="col-md-4 control-label">邮箱</label>

            <div class="col-md-6">
                <input v-model="email" id="email" type="email" class="form-control" name="email" required>
            </div>
        </div>

        <div class="form-group">
            <label for="password" class="col-md-4 control-label">密码</label>

            <div class="col-md-6">
                <input v-model="password" id="password" type="password" class="form-control" name="password" required>
            </div>
        </div>

        <div class="form-group">
            <div class="col-md-6 col-md-offset-4">
                <button type="submit" class="btn btn-primary">
                    登录
                </button>
            </div>
        </div>
    </form>
</template>

<script>
    import JWTToken from './../../helpers/jwt';

    export default {
        data() {
            return {
                email: '',
                password: ''
            }
        },
        methods: {
            login() {
                let formData = {
                    client_id: 2,
                    client_secret: 'VP3RWM7R6ogfDEBannIO9M2O1mdsqHpMZxhIwFyH',
                    grant_type: 'password',
                    scope: '',
                    username: this.email,
                    password: this.password
                };
                axios.post('/oauth/token', formData).then(response => {
                    JWTToken.setToken(response.data.access_token);
                    console.log(response.data);
                });
            }
        }
    }

</script>