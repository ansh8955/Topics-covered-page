

const H1 = React.createElement('h1',{

    style:{
        fontFamily:'GoogleSans',
        marginBottom:'2%'
    }
},'Topics covered');

const para = React.createElement('p',{

    style:{
        marginBottom:'4%'
    }
},'The following is a list of all the topics we cover in the MDN learning area.');

const anchor1 = React.createElement('a',{href:'https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web' ,
    style:{
        marginBottom:'1.5%',
        color:'rgb(26,113,196)'
    }},

'Getting started with the web');
const para1 = React.createElement('p',{

    style:{
        marginLeft:'2%',
        marginTop:'2%',
        lineHeight:'1.5rem'
    }
},'Provides a practical introduction to web development for complete beginners.');

const anchor2 = React.createElement('a',{href:'https://developer.mozilla.org/en-US/docs/Learn/HTML',
style:{
    color:'rgb(26,113,196)'
}},'HTML — Structuring the web');
const para2 = React.createElement('p',{
    style:{
        marginLeft:'2%',
        marginTop:'1.5%',
        lineHeight:'1.5rem'

    }

},'HTML is the language that we use to structure the different parts of our content and define what their meaning or purpose is. This topic teaches HTML in detail.');

const anchor3 = React.createElement('a',{href:'https://developer.mozilla.org/en-US/docs/Learn/CSS', style:{
    color:'rgb(26,113,196)'
}},'CSS — Styling the web');
const para3 = React.createElement('p',{

    style:{
        lineHeight:'1.5rem',
        marginLeft:'2%',
        marginTop:'1.5%'
    }
},'CSS is the language that we use to control our web content s style and layout, as well as adding behavior like animation. This topic provides comprehensive coverage of CSS.');

const Div1 = React.createElement('div',{

style:{

    marginBottom:'2%'
}

},[anchor1,para1]);
const Div2 = React.createElement('div',{
    style:{

        marginBottom:'2%'
    }
},[anchor2,para2]);
const Div3 = React.createElement('div',{
    style:{

        marginBottom:'2%'
    }
},[anchor3,para3]);

const mainDiv = React.createElement('div',{
id:'maindiv'

},[H1,para,Div1,Div2,Div3]);


ReactDOM.render(mainDiv,document.getElementById('root'))