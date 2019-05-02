import React from 'react'
import './TodoList.css'

const INITIAL_STATE = {
    list: [{
        todo: 'Learn React',
        completed: false
    }]
}

const listItemStyle = {
    display: 'flex',
    alignItems: 'center',
    lineHeight: '0'
}

const CompletedTodoStyle = {
    color: 'grey',
    textDecoration: 'line-through'
}

const Header = () => {
    return (
        <h1>todos</h1>
    )
}

const SubHeader = () => {
    return (
        <h2>Add todo to the list:</h2>
    )
}

const CheckBox = props => {
    return (
        <li style={listItemStyle}>
            <input 
                type='checkbox'
                className='switch_1' 
                value={props.todo} 
                onChange={props.updateCheckbox} 
                checked={props.completed} 
            />
            <p 
                style={ props.completed ? CompletedTodoStyle : {} } 
                onClick={() => props.clearItem(props.todo)}>
                {props.todo}
            </p>
        </li>
    )
}

class TodoList extends React.Component {

    constructor(props) {
        super(props)
        this.state = INITIAL_STATE
    }

    addTodo = (e) => {
        let isExist = false;

        if (e.key === 'Enter') {

            if (e.target.value === '') 
                alert('Please Add Todo Item...')

            else {

                this.state.list.map(item => {
                    if (item.todo === e.target.value) {
                        isExist = true
                    }
                    return isExist;
                })
    
                if (!isExist) {
                    let newTodo = {
                        todo: e.target.value,
                        completed: false
                    }
                    this.setState(state => ({
                        list: [...state.list, newTodo]
                    }))
                    e.target.value = ''
                }
    
                else 
                    alert('Todo is already in your List...')
            }
        }
    }

    clearList = () => this.setState({ list: []})

    resetList = () => this.setState({ ...INITIAL_STATE })

    clearItem = todo => this.setState({ list: this.state.list.filter(item => item.todo !== todo) })

    resetCompleted = () => this.setState({ list: this.state.list.filter(item => item.completed === false) })

    updateCheckbox = (e) => {
        let list = this.state.list
        list.forEach(item => {
            if (item.todo === e.target.value) item.completed = e.target.checked
        })
        this.setState({ list })
    }

    render() { 
        return (
            <div id="todo">
                <Header />
                <div>
                    <SubHeader />
                    <input 
                        name="input-field"
                        className="todo-input" 
                        type="text" 
                        placeholder="What needs to be done?" 
                        onKeyDown={this.addTodo} 
                    />
                    <ul>
                    {
                        this.state.list.map((item, index) => (
                            <CheckBox key={index} {...item}  updateCheckbox={this.updateCheckbox} />
                        ))
                    }
                    </ul>
                    <div className='button-group'>
                        <button type="button" onClick= {this.clearList}>Clear List</button>
                        <button type="button" onClick= {this.resetList}>Reset List</button>
                        <button type="button" onClick= {this.resetCompleted}>Clear Completed</button>
                    </div>
                </div>
            </div>
        )
    }
}
 
export default TodoList