import Card from "./Card"
const About = () => {
  return (
    <div id='about-me' className="max-w-[100vw] mb-10" ref={About}>
      <Card index={4} img={'md:inline-block'} links="none" header={'Baraa'}
        text={"Hi my name is baraa a teen from Lebanon I love programming and I am a self taught frontend developer."} />
      <Card index={5} img={'md:inline-block'} links="GTD" header={'contributor'} text={'I love contributing in open source projects in github and I am active in twitter and dev.to.'} />
      <Card index={9} img={"md:inline-block"} links="FM" header={'freelancer'}
        text={" I am a freelancer at freelancer.com and mostqel this really helps building my experience."} />
      <Card index={12} img={"md:inline-block"} header='for everyone'
        text={'I care making websites that are accessible on every screen and for all people.'} /> 

      <h1 className="text-5xl font-extrabold text-white text-center ">About me</h1>
    </div>
  )
}
export default About
