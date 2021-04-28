import "./style.css";

function Contact() {
    return (
        <div className="container">
            <h1>Contact</h1>
            <div>
                <form>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label for="exampleFormControlInput1">Full Name</label>
                                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Full Name"></input>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label for="exampleFormControlInput2">Email address</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter Email Address"></input>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                        <div className="form-group">
                            <label for="exampleFormControlTextarea1">Message</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Enter Message" rows="3"></textarea>
                        </div>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                
                </form>
            </div>
        </div>
    );
}

export default Contact;