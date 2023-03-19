import React, { Component } from 'react';




class Home extends Component {
    render() {
        return (
            <>
            <br></br>
            <br></br>
            <br></br>

            <div className="home-page">
                <div className="home-div">
                <h1 style={{ fontSize: 65 }}>📊GLUE</h1>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <div className="ML^2">
                <a className="jss129" href="https://wp.nyu.edu/ml2/" title="ML^2 NYU">
                <img alt="ML^2 NYU" className="jss133" title="ML^2 NYU Logo" src="ml2.png" width="200" height="100">
                </img>
                </a>
                <a className="jss129" href="https://www.cs.washington.edu/research/nlp" title="UW NLP">&nbsp;&nbsp;&nbsp;&nbsp;
                <img alt="UW NLP" className="jss133" title="UW NLP Logo" src="uw.png" width="200" height="150">
                </img>
                </a>
                <a class="jss129" href="https://deepmind.com/" title="DeepMind">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <img alt="DeepMind" class="jss133" title="DeepMind Logo" src="deepmind.png" width="250" height="80">
                </img>
                </a>
                <br></br>
                <br></br> 
                <br></br> 
                <br></br> 
                <p1 style={{ fontSize: 20 }}>
                The General Language Understanding Evaluation (GLUE) benchmark is a collection of resources for <br></br> 
                 training, evaluating, and analyzing natural language understanding systems. GLUE consists of:</p1>
                 <br></br>
                 <br></br>
                 <br></br>
                <p2 style={{ fontSize: 20 }} >
                1. &nbsp;&nbsp;&nbsp; A benchmark of nine sentence- or sentence-pair language understanding tasks 
                <br></br> built on established existing   datasets and selected to cover a diverse 
                <br></br> range of dataset sizes, text genres, and degrees of difficulty,
                <br></br>
                <br></br>
                2. &nbsp;&nbsp; A diagnostic dataset designed to evaluate and analyze model performance 
                <br></br> with respect to a   wide range   of linguistic phenomena found in  
                <br></br> natural language, and
                <br></br>
                <br></br>
                3. &nbsp;&nbsp;&nbsp; A public leaderboard for tracking performance on the benchmark and a dashboard <br></br> for  visualizing the  performance   of models on the diagnostic set.
                </p2>
                <br></br>
                <br></br>
                <br></br>
                <p3  style={{ fontSize: 20}} >
                The format of the GLUE benchmark is model-agnostic, so any system capable of processing sentence<br></br>
                 and sentence pairs and producing corresponding predictions is eligible to participate. The benchmark <br></br>
                 tasks are selected so as to favor models that share information across tasks using parameter sharing  <br></br>
                 or other transfer learning techniques. The ultimate goal of GLUE is to drive research in the  development<br></br> 
                 of general and robust natural language understanding systems.<br></br>

                </p3>
                </div>
            </div>
            <br></br>
            <br></br>
            <br></br> 
            <br></br>
            <br></br> 
            <br></br>
            <br></br>
            </>
        );
    }
}

export default Home;