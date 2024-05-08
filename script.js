let body=document.querySelector("body");         
let bar=document.querySelector("#sidebar");
let closer=document.querySelector(".closer");
let sider=document.querySelector(".nav-bar-phse-2");
let seendary=document.querySelectorAll("nav a");
let v1=document.querySelector(".visible");
let v2=document.querySelector(".visible2");
let v3=document.querySelector(".visible3");
let v4=document.querySelector(".visible4");
let s1=document.querySelector(".ver");
let s2=document.querySelector(".ver2");
let s3=document.querySelector(".ver3");
let s4=document.querySelector(".ver4");
let hover=document.querySelector(".hover");
let number=document.querySelector(".number2");
let form=document.querySelector("#submit");
let refresh=document.querySelector("#refresh");
let sent=document.querySelector("#send-message-box");
let eventBubler=document.querySelector(".content-box");
let value1=document.querySelector(".input1");
let value2=document.querySelector(".input2");
let value3=document.querySelector(".input3");
let value4=document.querySelector(".input4"); 
let value5=document.querySelector(".input5");
let message=document.querySelectorAll(".message");
let projectContent=document.querySelector("#project-main-box");
let clutter="";

bar.addEventListener('click',()=>{
               
               sider.style.width="100%";
               sider.style.height="100%";
               body.style.backdropFilter="brightness(40%)";
})
           
closer.addEventListener("click",()=>{
                   
                   sider.style.width="0";
                   sider.style.height="0";
                   sider.style.boxShadow="none";
                   body.style.backdropFilter="brightness(100%)";
})
          
seendary.forEach(anchor=>{
               anchor.addEventListener("click",(e)=>{
                   e.preventDefault();
                   // anchor.style.scale=0.8;
                  let source=document.querySelector(anchor.getAttribute('href'));
                  source.scrollIntoView({
                   behavior:"smooth"
                  })
               })
})

// first time using Event Bubler

eventBubler.addEventListener("click",(e)=>{


    if
    (e.target.classList.contains('ver'))
    {
           s1.style.scale='0.9';
           setTimeout(()=>{
               s1.style.scale='none';
           },100);
           
        v1.style.width="80%";
        v1.style.height="80%";
        v1.style.boxShadow=" 0 0  1.2vmin 0.1vmin rgba(0, 0, 0, 0.436) ";
        v1.style.zIndex="999";
        
    }
    
    else if
    (e.target.classList.contains('ver2')){
        v2.style.width="80%";
        v2.style.height="80%";
        v2.style.boxShadow=" 0 0  1.2vmin 0.1vmin rgba(0, 0, 0, 0.436) ";
        s2.style.scale='0.9';
           setTimeout(()=>{
               s2.style.scale='none';
           },100);
           v2.style.zIndex="999";
           
    }
    
    else if
    (e.target.classList.contains('ver3')){
        v3.style.width="80%";
        v3.style.height="80%";
        v3.style.boxShadow=" 0 0  1.2vmin 0.1vmin rgba(0, 0, 0, 0.436) "
        s3.style.scale='0.9';
           setTimeout(()=>{
               s3.style.scale='none';
           },100);
           v3.style.zIndex="999";
           
    }
    
    else if
    (e.target.classList.contains('ver4')){
        v4.style.width="80%";
        v4.style.height="80%";
        v4.style.boxShadow=" 0 0  1.2vmin 0.1vmin rgba(0, 0, 0, 0.436) "
        s4.style.scale='0.9';
           setTimeout(()=>{
               s4.style.scale='none';
           },100);
           v4.style.zIndex="999";
           
    }
    else if
    (e.target.classList.contains('wow')){
        v1.style.width="0%";
        v1.style.height="0%";
        v1.style.boxShadow="none";
        
    }
    
    else if
    (e.target.classList.contains('wow2')){
        v2.style.width="0%";
        v2.style.height="0%"
        v2.style.boxShadow="none"
        
    }
    
    else if
    (e.target.classList.contains('wow3')){
        v3.style.width="0%";
        v3.style.height="0%"
        v3.style.boxShadow="none"
        
    }
    
    else if
    (e.target.classList.contains('wow4')){
        v4.style.width="0%";
        v4.style.height="0%"
        v4.style.boxShadow="none"
        
    }
        
})
          
 number.addEventListener('click',()=>{
 let phoneNumber = "9205470224";
 navigator.clipboard.writeText(phoneNumber)
   .then(()=>{
   number.innerText="Number Copied"
   }).catch( (err)=>{
    number.innerText="Number not Copied";

    
  
 });
 

setTimeout(()=>{
   number.style.display="none";
   number.innerText="Click to Copy";
       },1000)
});

function sendEmail(){
    Email.send({
    Host : "smtp.elasticemail.com",
    Username : "pnipul7678@gmail.com",
    Password : "D259B82A97B29223F1C0ED81108108074E9F",
    To : 'nipulpandit20@gmail.com',
    From : "pnipul7678@gmail.com",
    Subject :`${value4.value}`,
    Body :`Name :- ${value1.value} <br><br> Contact :- ${value2.value} <br><br> Email Id :- ${value3.value}<br><br> Message :- ${value5.value}`
}).then(
  message =>{
      if(message ==="OK"){
          Swal.fire({ 
          title: "Success", 
          text: "Message sent successfully !", 
          icon: "success" });
      }else{
          Swal.fire({ icon: "error",
               title: "Oops...", 
               text: "Something went wrong!", 
               footer: '<a href="#">Why do I have this issue?</a>' });
      }
  }
);
}
       
      
form.addEventListener("click",(e)=>{

         e.preventDefault();
let pattern=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(?:\.[a-zA-Z]{2,})?$/;


         if(value1.value ==""){
             message[0].style.display="block";
             value1.style.borderColor="red"
             setTimeout(()=>{
                 message[0].style.display="none";
                 value1.style.borderColor="";
             }, 1000);


         }else if(value2.value ==""){
           message[1].style.display="block";
               value2.style.borderColor="red"
           setTimeout(()=>{
                 message[1].style.display="none";
                 value2.style.borderColor="";
             }, 1000);



         }else if(value3.value ==""){
           message[2].style.display="block";
           value3.style.borderColor="red";
           setTimeout(()=>{
                 message[2].style.display="none";
                 value3.style.borderColor="";
                 
             }, 1000);



         }else if(value4.value ==""){
           message[3].style.display="block";
           value4.style.borderColor="red";
           setTimeout(()=>{
                 message[3].style.display="none";
                 value4.style.borderColor="";
             }, 1000);



         }else if(value5.value ==""){
            message[4].style.display="block";
            value5.style.borderColor="red";
            setTimeout(()=>{
                  message[4].style.display="none";
                  value5.style.borderColor="";
              }, 1000);



         }else{

           let userNum=value2.value.toString();
           if(userNum.length  < 10){
               message[1].style.display="block";
               message[1].innerText="Enter Full Number";
               value2.style.borderColor="red";
               setTimeout(()=>{
                   message[1].style.display="none";
                   value2.style.borderColor="";
               },1500)



           }else if(userNum.length > 10){
               message[1].style.display="block";
               message[1].innerText="Number is greater then 10 digits";
               value2.style.borderColor="red";
               setTimeout(()=>{
                   message[1].style.display="none";
                   value2.style.borderColor="";
               },1500)
               
               
          }else if(!value3.value.match(pattern)){
              message[2].style.display="block";
              message[2].innerText="Enter valid E-mail";
              value3.style.borderColor="red";
              setTimeout(()=>{
                 message[2].style.display="none";
                 value3.style.borderColor="";
              },1500)


          }else if(value4.value==""){
            message[3].style.display="block";
            message[3].innerText="Subject Required";
            value4.style.borderColor="red";
            setTimeout(()=>{
               message[3].style.display="none";
               value4.style.borderColor="";
            },1500)


          }else{
              
           
             Swal.fire({
              title: "Sure, to send Email",
              text: "You won't be able to revert this!",
              icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, send email"
        }).then((result) => {
              if (result.isConfirmed) {
                 if(navigator.onLine){
                 
                     sendEmail();
              refresh.classList.remove("refresh");
                 }else{
                      Swal.fire({
                      title: "The Internet?",
                      text: "Check your internet connection 🧐",
                      icon: "question"
                    }); 
              refresh.classList.add("refresh");
                 }
           }
            });
          }
             
         
         }
});
     
  
refresh.addEventListener("click",()=>{
    value1.value="";
    value2.value="";
    value3.value="";
    value4.value="";
    value5.value="";
    refresh.classList.add("refresh");
    
});

       async function magic(){
        await gsap.from("#nav-part-1, #sidebar, .main",{
             y:-100,
             duration: 0.5,
             delay:0.4,
             opacity:0,
             stagger:0.1
         });
     
       await  gsap.from(".about-section",{
             opacity:0,
             y:30,
             scrollTrigger:{
                 trigger:".about-section",
                 scroller:"body",
                 // markers:true,
                 scrub:2,
                 start:"Top 60%",
                 end: "Top  -100%"
             }
         })
         
         
     };
    
magic()      

let projectArray=[
    {image:"https://cdn.significo.com/videos/significo-main-hero.mp4", projectName:"Significo clone", link:"link"},
    {image:"https://static.vecteezy.com/system/resources/previews/002/015/108/mp4/hand-close-up-calculating-income-expenses-free-video.mp4", projectName:"Temperature Calculater", link:"https://temperatureconverter-np.netlify.app/"},
    {image:"https://assets.mixkit.co/videos/preview/mixkit-woman-takes-her-headphones-to-listen-to-music-51134-large.mp4", projectName: "Music Player", link:"link"},  
]



projectArray.forEach((val,idx)=>{
clutter +=`<div class="project-1-slider" ${idx}>
                <div class="video-box">
                    <video autoplay loop muted src="${val.image}"></video>
                </div>
                <div class="project-name">
                     ${val.projectName}
                </div>
                <div class="project-btn">
                    <a href="${val.link}">Let's see</a>
                </div>
            </div>`
});

projectContent.innerHTML=clutter;

let title=document.querySelector("title");
  
