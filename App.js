//import
import React , { Component } from 'react'

//styles
import styled from 'styled-components'
import styles from './Styles/App.css'

//constant
const activeTabs = {
  FIRST: 'FIRST',
  SECOND: 'SECOND',
  THIRD: 'THIRD'
}
const myContent = {
  FIRST: 'this is text 1',
  SECOND: 'this is text 2',
  THIRD: 'this is text 3'
}
const textForTab = [
  {value: activeTabs.FIRST, title: 'Tab 1'},
  {value: activeTabs.SECOND, title: 'Tab 2'},
  {value: activeTabs.THIRD, title: 'Tab 3'}
]

//styled
const Wrapper = styled.div`
  width: 90%;
  height: 100%;
  background: #e3e3e3;
  left: 5%;
  position: absolute;
  margin-top: 20px;
`
const Button = styled.button`
  width: 100px;
  height: 40px;
  font-size: 18px;
  margin:10px 10px 10px 10px;
  background: ${props => props.inputColor || "grey"};
`
const Text = styled.p`
  margin: 20px 0px 0px 20px;
`

//classes
class App extends Component {
state = {
  activeTab: activeTabs.FIRST,
  text: myContent.FIRST,
}
handleSubmit = (activeTab,text) => (e) =>{
  this.setState({activeTab})
  this.setState({text:myContent[text]})
}
  render() {
    const {activeTab} = this.state
    const {text} = this.state
    return(
        <Wrapper>
            {textForTab.map(({ value, title }) =>
                <Button
                key = {value}
                inputColor = {activeTab === value ? 'red' : ''}
                onClick = {this.handleSubmit(value,value)}
              >
              {title}
              </Button>
               )}
              <Text>{text}</Text>
        </Wrapper>
    )
  }
}
export default App;
