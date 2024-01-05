const app = Vue.createApp({
    data(){
        return {
            icon : 'rocket',
            isConnected : false,
            x: 0,
            y: 0,
            titre: "Afficher liste",
            showIcon: true,
            showBio: true,
            users : [
                {
                    autheur: 'Les pros',
                    age: 21,
                    bio: 'Still working',
                    url: 'https://www.google.com/',
                    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png',
                    isPro: true
                },
                {
                    autheur: 'Momo',
                    age: 21,
                    bio: 'Still working',
                    url: 'https://www.google.com/',
                    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png',
                    isPro: false
                },
                {
                    autheur: 'Ayman',
                    age: 21,
                    bio: 'Still working',
                    url: 'https://www.google.com/',
                    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png',
                    isPro: true
                },
                {
                    autheur: 'Ilias',
                    age: 21,
                    bio: 'Still working',
                    url: 'https://www.google.com/',
                    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png',
                    isPro: false
                },
            ]
            
        }
    },
    methods: {
        augmenterAge(){
            this.users[0].age++
        },
        diminuerAge(){
            this.users[0].age--
        },
        connexion(){
            this.users[0].autheur='Ilias';
            //this.showIcon=false,
            this.isConnected=true
            this.icon='ship'
        },
        deconnexion(){
            this.users[0].autheur='Les pros';
            //this.showIcon=false,
            this.isConnected=false
            this.icon='rocket'
        },
        HandleMouse(e){
            console.log(e);
        },
        DeplacementSouri(e, number){
            this.x=e.offsetX;
            this.y=e.offsetY;
            console.log(number);
        },
        togglePro(user){
           user.isPro=!user.isPro;
        }
    }
});

app.mount('#app');