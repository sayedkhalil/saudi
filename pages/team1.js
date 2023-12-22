import Head from "next/head";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { useEffect, useState } from "react";
import Image from 'next/image'
import { useAppContext } from "../AppContext";
import { useRouter } from "next/router";
import { db, storage } from "../firebase";
import { collection, addDoc ,getDocs,doc,Timestamp,deleteDoc , setDoc,getDoc, query, where} from "firebase/firestore";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"
import Team from "../pages/team";
export const getStaticProps =async()=>{
    const pro=[]
    const prodlist = collection(db, 'broductes');
    const prodsnapshot = await getDocs(prodlist);
    const products =async()=>await prodsnapshot.docs?prodsnapshot.docs.map(doc =>{ pro.push({code:doc.data().code,
        title:doc.data().title,category:doc.data().category,imges:doc.data().imges,telee:doc.data().telee?doc.data().telee:"0",datee:doc.data().datee?doc.data().datee:"0",job:doc.data().job?doc.data().job:"",timee:doc.data().timee?doc.data().timee:"0",valuee:doc.data().valuee?doc.data().valuee:"0",ok:doc.data().ok?doc.data().ok:"0",res:doc.data().res?doc.data().res:"0",loc:doc.data().loc?doc.data().loc:"0"});   }):[]
    
    products()
   
        return{
        props:{getdata:{products:pro}}
             }
}
const Team1 = ({getdata}) => {
    let de=[]
    const [job,setjob]=useState("")
    const [category1,setcategory1]=useState([]);
    const [team1,setteam1]=useState(getdata.products.filter(x=>x.ok=="yes"&&x.loc=="1"))
    const [team2,setteam2]=useState(getdata.products.filter(x=>x.ok=="yes"&&x.loc=="2"))
    const [team3,setteam3]=useState(getdata.products.filter(x=>x.ok=="yes"&&x.loc=="3"))
    const [team4,setteam4]=useState(getdata.products.filter(x=>x.ok=="yes"&&x.loc=="4"))
    useEffect(async()=>{
        const codelist = collection(db, 'category');
        const codesnapshot = await getDocs(codelist);
       
        const catolist = codesnapshot.docs?codesnapshot.docs.map(doc =>{ de.push(doc.data());   }):de
        setcategory1(de)
     
        return catolist
       },[])
       
       const onu =(e)=>setjob(e.target.value)

       const onj =async(e,rr)=>{
        const h=team
        const v =team.find((x)=>x.code==rr)
        const docRef = await setDoc(doc(db, "broductes", v.code), {
            ...v,job:job}); 
     
       }
       const onval=async(e,rr)=>{
        const h=team
        const v =team.find((x)=>x.code==rr)
        const docRef = await setDoc(doc(db, "broductes", v.code), {
            ...v,valuee:e.target.value}); 
     
       }
       
    return (  
        <div className="m-0 container w-100 ">
        <Head>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>
<link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css'></link>

        </Head>


<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" 
crossOrigin="anonymous">
</script>

    <div className="row w-100 m-0 dir ">
<div className=" w-100 p-0 dir d-none d-lg-block">

    </div>

    <div className=" w-100 row dir  ">
  
<div className="row col-3 p-1  dir">
<div className="col-12">
    <p  className="text-center bg-li siz col- m-0 ">{team1.length}</p>
        <p  className="h6 text-center bg-info text-light p-2 my-4">فريق الرياض</p>
    </div>
    <div className="col-6">
        <p  className="h6 text-center text-info my-4">الاسم</p>
    </div>
   
   
    <div className="col-6">
        <p  className="h6 text-center text-info my-4">الوظيفة المتعاقد عليها</p>
    </div>
    
    </div>
    <div className="row col-3 p-1  dir">
<div className="col-12">
<p  className="text-center bg-li siz col- m-0 ">{team2.length}</p>
        <p  className="h6 text-center bg-secondary text-light p-2 my-4">فريق المواقع</p>
    </div>
    <div className="col-6">
        <p  className="h6 text-center text-info my-4">الاسم</p>
    </div>
   
   
    <div className="col-6">
        <p  className="h6 text-center text-info my-4">الوظيفة المتعاقد عليها</p>
    </div>
    
    </div>
    <div className="row col-3 p-1  dir">
<div className="col-12">
<p  className="text-center bg-li siz col- m-0 ">{team3.length}</p>
        <p  className="h6 text-center bg-success text-light p-2 my-4">فريق وسط الرياض</p>
    </div>
    <div className="col-6">
        <p  className="h6 text-center text-info my-4">الاسم</p>
    </div>
   
   
    <div className="col-6">
        <p  className="h6 text-center text-info my-4">الوظيفة المتعاقد عليها</p>
    </div>
    
    </div>
    <div className="row col-3 p-1  dir">
<div className="col-12">
<p  className="text-center bg-li siz col- m-0 ">{team3.length}</p>
        <p  className="h6 text-center bg-success text-light p-2 my-4">فريق التدعيم والتدخل</p>
    </div>
    <div className="col-6">
        <p  className="h6 text-center text-info my-4">الاسم</p>
    </div>
   
   
    <div className="col-6">
        <p  className="h6 text-center text-info my-4">الوظيفة المتعاقد عليها</p>
    </div>
    
    </div>
    </div>
    <div className="row col-3 dir " >
    { 
    team1.map((item)=>(
        <div className="row col-12 p-1 dir " key={item.key}>
        <div className="col-8 col-lg-6">
            <p  className="bg-info p-1 rounded text-light">{item.title}</p>
        </div>
   
   
     
        <div className="col-4 col-lg-6">
        <p  className="bg-light p-1 rounded text-dark">{item.job}</p>
              </div>
        </div>
    ))}
   </div>
   <div className="row col-3 dir " >
    { 
    team2.map((item)=>(
        <div className="row col-12 p-1 dir " key={item.key}>
        <div className="col-8 col-lg-6">
            <p  className="bg-secondary p-1 rounded text-light">{item.title}</p>
        </div>
   
   
     
        <div className="col-4 col-lg-6">
        <p  className="bg-light p-1 rounded text-dark">{item.job}</p>
              </div>
        </div>
    ))}
   </div>
   <div className="row col-3 dir " >
    { 
    team3.map((item)=>(
        <div className="row col-12 p-1 dir " key={item.key}>
        <div className="col-8 col-lg-6">
            <p  className="bg-success p-1 rounded text-light">{item.title}</p>
        </div>
   
   
     
        <div className="col-4 col-lg-6">
        <p  className="bg-light p-1 rounded text-dark">{item.job}</p>
              </div>
        </div>
    ))}
   </div>
   <div className="row col-3 dir " >
    { 
    team4.map((item)=>(
        <div className="row col-12 p-1 dir " key={item.key}>
        <div className="col-8 col-lg-6">
            <p  className="bg-success p-1 rounded text-light">{item.title}</p>
        </div>
   
   
     
        <div className="col-4 col-lg-6">
        <p  className="bg-light p-1 rounded text-dark">{item.job}</p>
              </div>
        </div>
    ))}
   </div>
    

    
</div>
 
</div>
    );
}
 
export default Team1;