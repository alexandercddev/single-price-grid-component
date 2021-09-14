/** 
 * @author: alexandercds
 * @description:
 * @date: 12/septiembre/2021
**/
import './assets/sass/App.scss';
import Content from './components/Content';
import InputButton from './components/InputButton';
import Form from './components/Form';
import { useForm } from 'react-hook-form';

const App = (props) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        window.open("https://alexandercd.herokuapp.com/home")   
    }
    return (
        <section className="container">
            <div className="card">
                <div className="top">
                    <Content
                    className="white"
                    title='Join our commuunity'>
                        <p className="sub-title">30-day, hassle-free money back guarantee</p>
                        <p>Gain access to our full library of tutotials along with expert code reviews.</p>
                        <p>Perfect for any developers who are serious about honing their skills.</p>
                    </Content>
                </div>
                <div className="bottom">
                    <Content
                    className="cyan-1"
                    title="Monthly Subscription"> 
                        <p className="sub-title"><span>$29</span> per month</p>
                        <p className="text">Full access fdor less than $1 a day</p>
                        <Form
                        register={register}
                        handleSubmit={handleSubmit}
                        onSubmit={onSubmit}>
                            <InputButton value="Sign Up"/>
                        </Form>
                    </Content>
                    <Content
                    className="cyan-2"
                    title="Why Us"> 
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