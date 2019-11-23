import React, {Component} from "react";
import * as firebase from 'firebase';

class Home extends Component {
    constructor() {
        super();
        this.state = {
            loaded: null,
            username: '',
            userInfo: '',
            temesOpen: null,
            debt: null
        }
        
    }
    componentDidMount() {
        const rootRef = firebase.database().ref();
        const schoolRef = rootRef.child('schools');
        let user = JSON.parse(localStorage.getItem('studyLinkuser'));
        console.log(user)
        let dbinfo;
        schoolRef.on('value', snap =>{
            dbinfo = snap.val()
            this.setState({
                userInfo: dbinfo,
                loaded: true
            })
            this.state.userInfo.map(item=>{
                if(item.school === user.school){
                    console.log('school right')
                    item.groups.map(item=>{
                        if(item.name === user.group){
                            console.log(item)
                            item.pupils.map(item=>{
                                if(item.name === user.name){
                                    //чи є борг
                                    this.setState({
                                        debt: item.debt
                                    })
                                }
                            })
                            //інфа про кількість тем відкритих і відвіданих занять
                            this.setState({
                                username: user.name,
                                temesOpen:  item.temes_open,
                                temesPass:  item.temes_pass
                            })
                        }
                    })
                    
                }
            })
        })
        
    }
    render() {
        let debtInfo;
        if(this.state.debt !== ''){
            debtInfo = <div>Увага у вас є борг {this.state.debt}грн</div>
        }
        if(this.state.debt === ''){
            debtInfo = <div></div>
        }
        if(!this.state.loaded){
            return <div>Loading...</div>
        }
        if(this.state.loaded){
            return (
                <div>
                    <h1>Hello {this.state.username}</h1>
                    <h3>Відвідано {this.state.temesPass} занять</h3>
                    <h3>Оплачено {Math.ceil(this.state.temesPass/4)*4} занять</h3>
                    <h3>Наступна оплата через {Math.ceil(this.state.temesPass/4)*4 - this.state.temesPass} заняття</h3>
                    {debtInfo}
                </div>
            );
        }
    }
}
export default Home;