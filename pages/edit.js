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
        title:doc.data().title,category:doc.data().category,imges:doc.data().imges[0],telee:doc.data().telee?doc.data().telee:"0",datee:doc.data().datee?doc.data().datee:"0",timee:doc.data().timee?doc.data().timee:"0",valuee:doc.data().valuee?doc.data().valuee:"0"});   }):[]
    
    products()
   
        return{
        props:{getdata:{products:pro}}
             }
}
const Edit = ({getdata}) => {
    let de=[]
    const [job,setjob]=useState("")
    const [category1,setcategory1]=useState([]);
    const [team,setteam]=useState(getdata.products)
    useEffect(async()=>{
        const codelist = collection(db, 'category');
        const codesnapshot = await getDocs(codelist);
       
        const catolist = codesnapshot.docs?codesnapshot.docs.map(doc =>{ de.push(doc.data());   }):de
        setcategory1(de)
     
        return catolist
       },[])
       
       const onu =(e)=>setjob(e.target.value)

       const onj=async(e,rr)=>{
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
        <div className="mt-3">
        <Head>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>
<link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css'></link>

        </Head>


<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" 
crossOrigin="anonymous">
</script>

    <div className="row w-100 dir ">
<div className=" w-100 dir d-none d-lg-block">

    </div>

    <div className=" w-100 dir d-none d-lg-block">
  
<div className="row w-100 dir">
    <div className="col-2">
        <p  className="h6 text-center text-info my-4">الاسم</p>
    </div>
    <div className="col-2">
        <p  className="h6 text-center text-info my-4">الوظيفة</p>
    </div>
    <div className="col-2">
        <p  className="h6 text-center text-info my-4">رقم الجوال</p>
    </div>
   
    <div className="col-2">
        <p  className="h6 text-center text-info my-4">الوظيفة المتعاقد عليها</p>
    </div>
    
    <div className="col-1">
        <p  className="h6 text-center text-info my-4">التقييم</p>
    </div>
    </div>
    </div>
    { 
    team.map((item)=>(
        <div className="row w-100 dir " key={item.key}>
        <div className="col-8 col-lg-2">
            <p  className="bg-secondary p-1 rounded text-light">{item.title}</p>
        </div>
        <div className="col-4 col-lg-2">
            <p  className="bg-light border border-secondary p-1 rounded text-center">{item.category}</p>
        </div>
        <div className="col-6 col-lg-2">
            <p className="bg-light border border-secondary p-1 rounded text-center w-100">
            <a className="" href="tel:+4733378901">{item.telee}</a>
            </p>
        
        </div>
   
        <div className="col-4 col-lg-3">
            {/* <input className="bg-light border border-secondary p-1 rounded text-center" onChange={(e)=>ontimee(e,item.code)} type="time" name="" value={item.timee=="0"?"":item.timee} min="09:00" max="17:00"  /> */}
          <input type="text" id="lname" name="lname" onChange={onu}></input>
           <button type="" onClick={(e)=>onj(e,item.code)}>on</button>
        </div>
     
        <div className="col-4 col-lg-3">
        <select value="" className="col-2 p-1" onChange={(e)=>onval(e,item.code)}>
    <option value="" disabled selected> نتيجة المقابلة     
        </option>
        <option value="اجتاز" > اجتاز    
        </option>
        
        <option value="لم يجتاز" > لم يجتاز    
        </option>
        
        <option value="انتظار" > انتظار    
        </option>
        
        <option value="0" > لم تتم المقابلة    
        </option>
        </select>        </div>
        </div>
    ))}
   
   
    

    
</div>
 
</div>
    );
}
 
export default Edit;