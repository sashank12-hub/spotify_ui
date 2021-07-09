import Main1 from './components/Main1';
import CardWrapper from './components/CardWrapper'
const Section = ({text,apidata,id}) => {
    return (
        <div>
        <Main1 text={text} id={id}/>
        <CardWrapper apidata={apidata} id={id}/>
        </div>
    )
}

export default Section
