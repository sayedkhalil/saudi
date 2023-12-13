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

const NEw = (props) => {
    let bb=[]
    let de=[]
    const [category1,setcategory1]=useState([]);
    const [team,setteam]=useState(props.data)
    const [ej,setej]=useState(props.data.filter(x=>x.valuee=="اجتاز"));
    const [bd,setbd]=useState(0);
    const [item,setitem]=useState({});
    const [dis,setdis]=useState("ofdis");
    const [ok,setok]=useState("");
    const [res,setres]=useState("");



    useEffect(async()=>{
        const codelist = collection(db, 'category');
        const codesnapshot = await getDocs(codelist);
       
        const catolist = codesnapshot.docs?codesnapshot.docs.map(doc =>{ de.push(doc.data());   }):de
        setcategory1(de)
        

        return catolist
       },[])
       const onct =(e)=>{
        const cc =e.target.value
        const fct=props.data.filter((x)=>x.category == cc)
        setteam(fct)
       }
       const ondt =(e)=>{
        const dd =e.target.value
        const fdt=props.data.filter((x)=>x.datee == dd)
        setteam(fdt)
       }
       const onsl =(e)=>{
        const dd =e.target.value
        const fdt=props.data.filter((x)=>x.valuee == dd)
        setteam(fdt)
       }
       const onall =()=>{
        
        setteam(props.data)
       }
       const ontimee=async(e,rr)=>{
        const h=team
        const v =props.data.find((x)=>x.code==rr)
        const docRef = await setDoc(doc(db, "broductes", v.code), {
            ...v,timee:e.target.value}); 
     
       }
       const onbgg=(x)=>{
        if(x=="اجتاز"){return("bg-success")}
        else if (x=="لم يجتاز")  {return("bg-danger")}      
        else if (x=="انتظار"){return("bg-warning")}
          
             else{return("bg-secondary")}
        
       }
       const onbggg=(x)=>{
        if(x=="yes"){return("bg-success")}
        else if (x=="nono")  {return("bg-danger")}      
       
          
             else{return("bg-light")}
        
       }
    //    const rrr=()=>{

    //      props.data.forEach(x=>{if(x.valuee=="اجتاز"){ 
    //         setbd(bd=bd+1)  
    //          console.log(bd)
    //      }})

    //    }
    //    rrr()
    const onchos=(x)=>{

        const d =team.find(i=>i.code==x)
        setitem(d)
       setdis("ondes")
        
    }
    const onok=(e)=>setok(e.target.value)
    const onres=(e)=>setres(e.target.value)
    const onval=async()=>{
        
        const docRef = await setDoc(doc(db, "broductes", item.code), {
            ...item,ok:ok,res:res}); 
            setdis("ofdis")
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
<div className={`dia ${dis}`}>
    <p className="text-center h3">{item.title}</p>
    <form class="row g-5 p-3 container w-100">
  <div class="col-6">
    <label for="staticEmail2" class="">تحديد حالة الاتفاق</label>
    <select className=" " onChange={onok}>
    <option value="" selected disabled>حالة الاتفاق</option>

        <option value="yes">تم الاتفاق</option>
        <option value="no">لم يتم الاتفاق</option>

    </select>
  </div>
  <div class="col-9 dd">
    <label for="inputPassword2" class="visually-hidden ">ملاحظات</label>
    <input type="text" class="form-control" placeholder="ملاحظات" onChange={onres}/>
  </div>
  <div class="col-6">
    <button type="submit" class="btn btn-primary mb-3 mx-auto w-100" onClick={onval}>تأكيد</button>
  </div>
</form>
<button type="button" class="btn-close btn-close-white clos" aria-label="Close" onClick={()=>setdis("ofdis")}></button>

</div>
<div className="row w-100 dir ">
<div className=" w-100 dir d-none d-lg-block">
<div className="w-100 mb-2 row">
    <div className="col-3 p-2 row m-0">
       <p  className="text-center bg-li siz col- m-0 ">{team.length}</p>
       <p  className="text-center bg-brand text-light m-0 h6 p-2  col-12 ">عدد المتقدمين</p>
        
    </div>
    <div className="col-3 p-2 row m-0">
       <p  className="text-center bg-li siz col- m-0 ">34</p>
       <p  className="text-center bg-info text-light m-0 h6 p-2  col-12 ">تم التقييم</p>
        
    </div>
    <div className="col-3 p-2 row m-0">
       <p  className="text-center bg-li siz col- m-0 ">28</p>
       <p  className="text-center bg-success text-light m-0 h6 p-2  col-12 ">تم قبولهم </p>
        
    </div>
    </div>

    <div className="w-100 row">

    <select value="" className="col-2 p-1" onChange={onct}>
    <option value="" disabled selected> اختار الوظيفة      
        </option>
           { category1.map((x=>(<option value={x.name} key={x.name}>  {x.name}       
        </option>))) }
        </select>
        <i class="fas fa-2x col-1 fa-filter"></i>
        <input className="col-2" type="date" name="" value=""min="2023-12-10" max="2023-12-25" onChange={ondt}/>
        <i class="fas fa-2x col-1 fa-filter"></i>
        <select value="" className="col-2 p-1" onChange={onsl}>
    <option value="" disabled selected> نتيجة المقابلة     
        </option>
        <option value="اجتاز" >اجتاز</option>
        
        <option value="لم يجتاز" >لم يجتاز</option>
        
        <option value="انتظار" >انتظار</option>
        
        <option value="0" > لم تتم المقابلة    
        </option>
        </select>
        <i class="fas fa-2x col-1 fa-filter"></i>
        <button type="button" class="btn btn-primary col-2" onClick={onall}>الكل</button>
    </div>
    </div>

    <div className=" w-100 dir d-none d-lg-block">
  
<div className="row w-100 dir">
    <div className="col-2">
        <p  className="h6 text-center text-info my-4">الاسم</p>
    </div>
    <div className="col-1">
        <p  className="h6 text-center text-info my-4">الوظيفة</p>
    </div>
    <div className="col-2">
        <p  className="h6 text-center text-info my-4">رقم الجوال</p>
    </div>
    
    <div className="col-2">
        <p  className="h6 text-center text-info my-4">الوظيفة المتعاقد عليها</p>
    </div>
     <div className="col-1">
        <p  className="h6 text-center text-info my-4">cv</p>
    </div>
    <div className="col-1">
        <p  className="h6 text-center text-info my-4">التقييم</p>
    </div>
    <div className="col-1">
        <p  className="h6 text-center text-info my-4">تأكيد</p>
    </div>
    <div className="col-1">
        <p  className="h6 text-center text-info my-4">ملاحظات</p>
    </div>
    </div>
    </div>
    { 
    team.map((item)=>(
        <div className="row w-100 dir " key={item.key}>
        <div className="col-8 col-lg-2">
            <p  className={`${onbgg(item.valuee)} p-1 rounded text-light`}>{item.title}</p>
        </div>
        <div className="col-2 col-lg-1">
            <p  className="bg-light border border-secondary p-1 h6 rounded text-center">{item.category}</p>
        </div>
        <div className="col-6 col-lg-2">
            <p className="bg-light border border-secondary p-1 rounded text-center w-100">
            <a className="" href="tel:+4733378901">{item.telee}</a>
            </p>
        
        </div>
        
        <div className="col-4 col-lg-2">
            {/* <input className="bg-light border border-secondary p-1 rounded text-center" onChange={(e)=>ontimee(e,item.code)} type="time" name="" value={item.timee=="0"?"":item.timee} min="09:00" max="17:00"  /> */}
            <p className="bg-light border border-secondary p-1 rounded text-center">{item.job?item.job:"لم  تحدد الوظيفة بعد"}</p>
        </div>
         <div className="col-4 col-lg-1">
            <p className="bg-light border border-secondary p-1 rounded text-center">
            <a className="" href={item.imges[0]} target="-blank">رابط             <i class="fas fa-2x fa-external-link-alt"></i>
                      </a>
            </p>
        </div>
        <div className="col-4 col-lg-1">
            <p className={`${onbgg(item.valuee)} border border-secondary  text-light p-1 rounded text-center`}>{item.valuee=="0"?"لم يقيم":item.valuee}</p>
        </div>
        <div className="col-3 col-lg-1">
            <p className={`${onbggg(item.ok)} border border-secondary p-1 rounded text-center`} >{item.ok=="0"?"انتظار":item.ok=="yes"?"تم الاتفاق":"لم يتم "}</p>
        </div>
        <div className="col-3 col-lg-2 row">
            <p className="bg-light border border-secondary p-1 rounded text-center col-10 col-lg-10">{item.res=="0"?"":item.res}</p>
            {/* <i class="fas fa-2x col-2 fa-filter"></i> */}
            <i class="fas pointer1 fa-ellipsis-v  fa-2x col-2" onClick={()=>onchos(item.code)}></i>
        </div>
        </div>
    ))}
   
   
    

    
</div>
 
</div>
    );
}
 
export default NEw;