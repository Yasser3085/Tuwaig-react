
import './App.css'
import Image1 from './images/footerbg.png'
import svg from './images/logo.svg'
import Courses from './component/courses'
import Python from './component/python'
import Aws from './component/aws' 


function App() {
 

  return (
<>









<div className="grid-container">
      <div className="grid-item header">
        <nav className="navbar">
          <a  className="btn4"> </a>
          <div >
            <a href="" className="btn1"> تسجيل الدخول</a>
          </div>
          <a href="" className="btn2"> منصاتنا</a>
          <a href="" className="btn3"> الرئيسية</a>

          <img
            className="img"
            src= {svg}
            alt=""
          />
        </nav>
      </div>

      <div className="grid-item main">
        <h1>اكاديمية طويق</h1>
        <h2>&lt; في مكان واحد /&gt;</h2>
        <br />
        <h2 className='text-end m-5'>البرامج والمعسكرات</h2>
        <div className='d-flex w-100 h-100 gap-3'>  <Python name='python' date='19/2/2024' status=' متاح' ></Python>
        <Aws name=' Amazon Web Services ' date='19/10/2023' status='غير متاح'></Aws>
        
       <Courses  name="Javascript" date='15/7/2023' status='متاح'></Courses>

       </div>
     
      </div>


      

      <div className="grid-item footer">
        <img
          className="footerimg"
          src={Image1}
          alt=""
        />
        <div className="c1">
          <div className="footertext">
            <h3>
              المملكة العربية السعودية الرياض - حي مطار الملك خالد جامعة الأميرة
              نورة بنت عبدالرحمن المبنى: 3446 الرمز البريدي: 13415 الرقم
              الاضافي: 6978 الوحدة: 86 هاتف:+ 966112669990 جميع الحقوق محفوظة
              للاتحاد السعودي للأمن السيبراني والبرمجة والدرونز ٢٠٢١
            </h3>
          </div>
        </div>
      </div>
    </div> 



</>



)}

export default App
