import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='container pt-22'>
        <div className='grid md:grid-cols-2 gap-20 items-center'>
            <div data-aos="zoom-in-up">
                <h2 className='text-4xl md:text-5xl'>Technologies I work with</h2>
                <p className='text-gray-500 pt-2'>
                I have experience with a range of programming languages & web technologies, including C++, C, HTML, CSS, & Java. Currently, I’m expanding my skills with Next.js, Tailwind CSS, & JavaScript to build modern, responsive web applications. My journey in tech is driven by a passion for learning & adapting to new tools. I’m always eager to deepen my expertise & embrace new challenges in the tech world.
                </p>
            </div>
            <div>
                <div className='grid grid-cols-2 text-yellow-200 text-2xl sm:text-2xl'>
                    <div className='space-y-2'>
                        <h2 data-aos="zoom-in-up">C++, C</h2>
                        <h2 data-aos="zoom-in-up">HTML, CSS</h2>
                        <h2 data-aos="zoom-in-up">Java, Typescript</h2>
                    </div>
                    <div className='space-y-2'>
                        <h2 data-aos="zoom-in-up">Tailwind(under learning)</h2>
                        <h2 data-aos="zoom-in-up">NextJS(under learning)</h2>
                        <h2 data-aos="zoom-in-up">Javascript(under learning)</h2>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Skills
