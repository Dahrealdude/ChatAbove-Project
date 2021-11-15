import React from 'react'
import {
    Link,
    Outlet
  } from 'react-router-dom';


class Home extends React.Component {
    render(){
        return (
        
            <div>
                <div className='header'>
                    <h1>A Chat Above</h1>
                </div>
                
                <nav className='topnav'>
                    
                    <ul>

                        <li>
                            <Link to="/home">Home</Link>
                        </li>

                        <li>
                            <Link to="/contacts">Contacts</Link>
                        </li>

                        <li>
                            <Link to="/dashboard">Dashboard</Link>
                        </li>

                        <li>
                            <Link to="/landingpage">Sign In</Link>
                        </li>

                        <li>
                            <Link to="/messages">Messages</Link>
                        </li>

                        <li>
                            <Link to="/newcontact">New Contact</Link>
                        </li>

                        <li>
                            <Link to="/newgroup">New Group</Link>
                        </li>

                        <li>
                            <Link to="/newmessage">New Message</Link>
                        </li>

                    </ul>
                </nav>
                
                <Outlet/>

                <div class="row">

                    <div class="leftcolumn">

                        <div class="space">
                           <p>
                           Machine learning (ML) is the study of computer algorithms that can improve automatically 
                           through experience and by the use of data.[1] It is seen as a part of artificial intelligence. 
                           Machine learning algorithms build a model based on sample data, known as training data, in order 
                           to make predictions or decisions without being explicitly programmed to do so.[2] Machine learning 
                           algorithms are used in a wide variety of applications, such as in medicine, email filtering, speech 
                           recognition, and computer vision, where it is difficult or unfeasible to develop conventional algorithms 
                           to perform the needed tasks.[3]

                           A subset of machine learning is closely related to computational statistics, which focuses on making 
                           predictions using computers; but not all machine learning is statistical learning. The study of 
                           mathematical optimization delivers methods, theory and application domains to the field of machine 
                           learning. Data mining is a related field of study, focusing on exploratory data analysis through 
                           unsupervised learning.[5][6] Some implementations of machine learning use data and neural networks 
                           in a way that mimics the working of a biological brain.[7][8] In its application across business 
                           problems, machine learning is also referred to as predictive analytics.
                           </p>
                        </div>
                    </div>
                
                </div>

            </div>


        )
    }
}
export default Home;