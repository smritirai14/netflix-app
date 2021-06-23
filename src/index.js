
import React from "react";
import ReactDOM from "react-dom";
import Card  from "./Cards";


ReactDOM.render(
    <> 
      <Card
        imgsrc="https://in.images.search.yahoo.com/search/images;_ylt=AwrPg3a7t9JgcTIAoRC7HAx.;_ylu=Y29sbwNzZzMEcG9zAzEEdnRpZAMEc2VjA3BpdnM-?p=DARK+netflix&fr2=piv-web&fr=mcafee#id=22&iurl=http%3A%2F%2Fwww.brooklynvegan.com%2Ffiles%2F2018%2F01%2Fdark.jpg&action=click"
        title="A Netflix original series"
        sname="Dark" 
        link="https://www.netflix.com/in/title/80100172"
    />
      <Card
        imgsrc="https://www.google.com/search?q=lucifer&rlz=1C1CHBF_enIN945IN945&sxsrf=ALeKk02slwOTu2Glgr7abwfHd4aue5O3gQ:1624418940926&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjSgsKP6KzxAhWO4jgGHXMKD2kQ_AUoAnoECAEQBA&biw=649&bih=646#imgrc=6eKs3VMKZ8hw_M" 
        title="A Netflix original series"
        sname="Lucifier" 
        link="https://www.netflix.com/in/title/80057918"
    />


     <Card
        imgsrc="https://www.google.com/search?q=nevertheless+netflix+series&rlz=1C1CHBF_enIN945IN945&sxsrf=ALeKk001hHIJGa9Z4HdWnpDpY73MNvHdNg:1624418219790&source=lnms&tbm=isch&sa=X&ved=2ahUKEwj62NO35azxAhWP4jgGHSrwDggQ_AUoAnoECAEQBA&biw=649&bih=646#imgrc=5BhtdLPdhdy-bM"
        title="A Netflix original series"
        sname="Nevertheless" 
        link="https://www.netflix.com/in/title/81435649"
    />
    </>,
    document.getElementById("root")
);
