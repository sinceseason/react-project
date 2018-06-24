import { observable, action } from 'mobx';

class userStore {
    @observable loginUser;

    @action setUser(loginUser) {
        this.loginUser = loginUser;
    }
}

export default new userStore();