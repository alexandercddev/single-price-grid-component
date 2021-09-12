/** 
 * @author: alexandercds
 * @description:
 * @date: 13/septiembre/2021
**/
import './assets/sass/App.scss';
import Content from './components/Content';
import InputButton from './components/InputButton';

const App = (props) => {
    return (
        <section className="container">
            <div className="card">
                <div className="top">
                    <Content
                    title='Join our commuunity'>
                        <p>30-day, hassle-free money back guarantee</p>
                        <p>Gain access to our full library of tutotials along with expert code reviews.</p>
                        <p>Perfect for any developers who are serious about honing their skills.</p>
                    </Content>
                </div>
                <div className="bottom">
                    <Content>
                        <p>Monthly Subscription</p>
                        <p><span>$29</span> per month</p>
                        <p>Full access fdor less than $1 a day</p>
                        <InputButton value="Sign Up"/>
                    </Content>
                    <Content>
                        <p>Why Us</p>
                        <p>Tutorials by indusctry experts</p>
                        <p>Peer & expert code review</p>
                        <p>Coding exercises</p>
                        <p>Access to our GitHub repos</p>
                        <p>Community forum</p>
                        <p>Flashcard decks</p>
                        <p>New videos every week</p>
                    </Content>
                </div> 
            </div>
        </section>
    );
}

export default App;