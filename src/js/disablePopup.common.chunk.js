(self.webpackChunk=self.webpackChunk||[]).push([[9822],{86330:(e,t,n)=>{n.r(t),n.d(t,{DisablePopup:()=>i});var a=n(5872),o=n(7417),s=n(88326),l=n(27378),r=n(61658);class i extends l.Component{constructor(){super(...arguments),this.cancel=()=>this.props.remove()}render(){return l.createElement("div",{className:(0,a.cs)(r.gButtonPopup,r.disable,{[r.gdocs]:this.props.gdocsView},this.props.isFlipped&&r.flipped)},l.createElement("p",{className:r.text},"Turn off FastLearner ",l.createElement("br",null)," for ",l.createElement("span",{className:r.bold},this.props.domain),"?"),this.props.gdocsView?l.createElement((()=>l.createElement(l.Fragment,null,l.createElement(o.z,{cls:"disable",styles:{width:208},text:"yes, disable",onClick:()=>this.props.disableSite()}),l.createElement(s.M,{clickHandler:()=>this.cancel()},l.createElement("button",{className:r.link},"No, don’t turn it off.")))),null):l.createElement((()=>l.createElement(l.Fragment,null,l.createElement(o.z,{cls:"disable",styles:{width:208},text:"Yes, for this session.",onClick:()=>this.props.disableOnTab()}),l.createElement(o.z,{cls:"disable",styles:{width:208},text:"Yes, from now on.",onClick:()=>this.props.disableSite()}),l.createElement(s.M,{clickHandler:()=>this.cancel()},l.createElement("button",{className:r.link},"No, don’t turn it off.")))),null),l.createElement(s.M,{clickHandler:()=>this.cancel()},l.createElement("button",{className:r.close})))}}},7417:(e,t,n)=>{n.d(t,{z:()=>i});var a=n(5872),o=n(88326),s=n(27378),l=n(61007);n(54817);const r=({className:e})=>s.createElement("div",{className:`gr_-spinner ${e}`},s.createElement("div",{className:"gr_-bounce1"}),s.createElement("div",{className:"gr_-bounce2"}),s.createElement("div",{className:"gr_-bounce3"}));class i extends s.Component{constructor(){super(...arguments),this.onClick=e=>{e.preventDefault(),this.props.loading||this.props.onClick&&this.props.onClick(e)}}render(){const{loading:e,cls:t}=this.props,n=e?"":this.props.text,i=this.props.styles||{width:290},c=(0,a.cs)({[l.buttonContainer]:!0,[l[t]]:void 0!==t,[l.loading]:e});return s.createElement("div",{className:c,style:i},e&&s.createElement(r,{className:l.buttonSpinner}),s.createElement(o.M,{clickHandler:this.onClick,dataFastLearnerPart:this.props.dataFastLearnerPart},s.createElement("button",{type:"button",style:i,className:l.button},n)))}}},61658:e=>{e.exports={gButtonPopup:"_1kF5v",newDataControl:"_2DXpn",showWrapper:"jbUGk",flipped:"_33Y70",title:"_3j0IH",icon:"_3mzPB",button:"_3ayiu",buttonText:"_3iTGv",popupFooter:"_1Pn79",isFlipped:"mrPCR",settings:"_1wln3",loginSSOPopup:"_3VfKv",text:"_1igtd",bold:"_233YR",link:"_3Zolz",secondary:"_3CC0d",firstTime:"eytxh",close:"_1Q8MJ",disable:"_2GBXV",gdocs:"_1rwC7",gdocsBeta:"_3Nt7c",header:"_2QN8E",headerUnavailable:"_3oKby",cardsIcon:"_2p0cU",bubbleArrow:"_3P-V4",unavailablePopup:"_3ItKT",loginReminder:"_3nwkh",permission:"_3t67i",buttonsContainer:"_1o9Lo",mainButton:"_2Ltwz",secondaryButton:"_1gDFt",onboarding:"_36Myk",chipmunkGButtonCalloutPopup:"_1BqSc",closeWrapper:"_1iSkp",containerContents:"_3-RfQ",container:"_3DqWc",containerHeaderDefault:"tSLDM",containerKeyboardQRCodeImageBlock:"_35_s3",qrcode:"_25Ol6",containerBrandToneImageBlock:"_26_GC",img:"_38WyO",containerSnippetImageBlock:"g-PwS",containerLlamaAdoptionImageBlock:"_2rwye",containerOwnerActivationImageBlock:"AUmvb",containerGraduationImageBlock:"_2k9Eq",containerHeaderImageBlock:"_2u4gj",containerTitle:"_3SP28",containerText:"w2FY9",containerButton:"_3p4LT",dismiss:"_1CkBd",warningPopup:"dcXJa",btn:"_36yMW",warning:"_3IVIe",ctaBtnGroup:"_1Bbg8",ctaButton:"_1mTiW",later:"_22eWb",managedSSOControl:"nF7Y6",illustration:"ThWjl",signInWithSSO:"_3cCtR",signInWithSSO2:"_2Z9Lo"}},61007:e=>{e.exports={buttonContainer:"zh9NK",form:"_1Fp6z",buttonSpinner:"_2ox-M",button:"w4BE8",loading:"II5Au",onboarding:"_3f6zz",disable:"_26Laa"}},54817:()=>{}}]);