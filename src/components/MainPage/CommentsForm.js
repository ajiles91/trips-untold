import React, {Component} from 'react';
// import './CommentsForm.css'

// export default class CommentsForm extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       userName:'',
//       comment:''
//     }
//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.handleChange = this.handleChange.bind(this);
//   }
  
//   handleChange(event) {
//     const { name, value } = event.target;
//     this.setState({
//       [name]: value
//     });
//   }

//   handleSubmit(event) {
//     event.preventDefault();
    
//     fetch(`${config.API_BASE_URL}/idea`, {
//       method: 'POST',
//       body: JSON.stringify({
//         userName: this.state.userName,
//         comment: this.state.comment
//       }),
//       headers: {
//         'Content-type': 'application/json; charset=UTF-8'
//       }
//     })
//     .then(response => response.json())
//     .then(json => console.log(json))
//   }


//   render() {
//     return (
//       <div className = 'whole-form'>
//         <p>this is where the form for comments will go - linked to the backend</p>
//         <form className="submit-idea" onSubmit={this.handleSubmit}>
              
//               <legend>
//                 Create a new idea here! Please provide as much information for your
//                 summary for collaborators know how to help you.
//               </legend>
            
//               <div>
//                 <label htmlFor="idea-name">Idea Name</label>
//                 <input
//                   type="text"
//                   value={this.state.ideaName}
//                   onChange={this.handleChange}
//                   name="ideaName"
//                   required
//                 />
//               </div>

//               <div>
//                 <label htmlFor="idea-summary">Idea Summary</label>
//                 <textarea
//                   value={this.state.ideaSummary}
//                   rows="15"
//                   cols="43"
//                   onChange={this.handleChange}
//                   name="ideaSummary"
//                   required
//                 />
//               </div>

//               <div className="author-name-container">
//                 <label htmlFor="contact-info">Author Name</label>
//                 <input
//                   type="text"
//                   name="authorName"
//                   value={this.state.authorName}
//                   onChange={this.handleChange}
//                   required
//                 />
//               </div>

//               <div className="contact-info-container">
//                 <label htmlFor="contact-info">Email</label>
//                 <input
//                   type="email"
//                   name="email"
//                   value={this.state.email}
//                   onChange={this.handleChange}
//                   required
//                 />
//               </div>
//               <div className='button-wrapper'>
//                 <button type="submit">Submit</button>

//               </div>
              
            
//           </form>
//       </div>
//     );
//   }
// }

