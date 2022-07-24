import '../Components/informationaboutmyself.css'

export default function Informationaboutmyself() {
  return <>
  <div className="container">
    <div className='profile_content'>
      <div className='my_profile'>
        <h2 className='profile_title'>Profile <hr className='my_hr'/></h2> 
        <p className='profile_text'>Front-End programmer with 2 years experience. Expert in HTML and CSS/SASS, Java-Script, React.js. Created by Many Sites.</p>
      </div>

      <div className="my_skills">
        <h2 className='profile_title skills_title'>Skills <hr /></h2>
        <div className='flex'>
        <ul className="skills_list">
          <li><a href="#" className="skills_link">
            <svg className='circle_icon' width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M4 7C5.65685 7 7 5.65685 7 4C7 2.34315 5.65685 1 4 1C2.34315 1 1 2.34315 1 4C1 5.65685 2.34315 7 4 7Z" fill="white" stroke="#3E6AF2" stroke-width="1.5"/>
            </svg>
            HTML/CSS/SASS</a></li>
          <li><a href="#" className="skills_link">
            <svg className='circle_icon' width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M4 7C5.65685 7 7 5.65685 7 4C7 2.34315 5.65685 1 4 1C2.34315 1 1 2.34315 1 4C1 5.65685 2.34315 7 4 7Z" fill="white" stroke="#3E6AF2" stroke-width="1.5"/>
            </svg>
            Java-Script</a></li>
          <li><a href="#" className="skills_link">
            <svg className='circle_icon' width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M4 7C5.65685 7 7 5.65685 7 4C7 2.34315 5.65685 1 4 1C2.34315 1 1 2.34315 1 4C1 5.65685 2.34315 7 4 7Z" fill="white" stroke="#3E6AF2" stroke-width="1.5"/>
            </svg>
            React-JS</a></li>
        </ul>
        <ul className='skills_list'>
          <li><a href="#" className="skills_link">
            <svg className='circle_icon' width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M4 7C5.65685 7 7 5.65685 7 4C7 2.34315 5.65685 1 4 1C2.34315 1 1 2.34315 1 4C1 5.65685 2.34315 7 4 7Z" fill="white" stroke="#3E6AF2" stroke-width="1.5"/>
            </svg>
            Bootstrap</a></li>
          <li><a href="#" className="skills_link">
            <svg className='circle_icon' width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M4 7C5.65685 7 7 5.65685 7 4C7 2.34315 5.65685 1 4 1C2.34315 1 1 2.34315 1 4C1 5.65685 2.34315 7 4 7Z" fill="white" stroke="#3E6AF2" stroke-width="1.5"/>
            </svg>
            Python</a></li>
          <li><a href="#" className="skills_link">
            <svg className='circle_icon' width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M4 7C5.65685 7 7 5.65685 7 4C7 2.34315 5.65685 1 4 1C2.34315 1 1 2.34315 1 4C1 5.65685 2.34315 7 4 7Z" fill="white" stroke="#3E6AF2" stroke-width="1.5"/>
            </svg>
            C Language</a></li>
        </ul>

        </div>
      </div>
    </div>

    <section className='edu_section'>
      <div className='edu_content'>
        <h2 className='edu_title'>Education <hr /></h2>
        <div className='edu_info'>
          <div className='flex'>
            <span className='edu_date'>2021 – 2022 </span>
            <h3 className='education'>Najot Talim and IT Park Tashkent</h3>
          </div>
          <span className='city'>Tashkent</span>
        </div>
        <div>
          <p>I studied C and Python for 4 months at Foundation. My current position is front-end web developer</p>
        </div>
      </div>
    </section>
  </div>
  </>
}