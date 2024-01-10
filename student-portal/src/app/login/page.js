export default function login(){
    return(
        <div class="card container p-4 col-md-4">
        <div class=" bg-white text-center">
            <h2>Login</h2>
        </div>
        <div class="card-body">
            <blockquote class="blockquote mb-0">
            </blockquote>
            <form>

                <div class="form-group">
                    <label for="exampleFormControlSelect1">Email</label>
                    <input type="email" class="form-control" id="userEmail"  placeholder="name@gmail.com" required=""/>
                </div>
                <div class="form-group">
                    <label for="exampleFormControlSelect1">Password</label>
                    <input type="password" class="form-control" id="userPassword" placeholder="Enter the password" required=""/>
                </div>
                <div class="text-center">
                    <a type="submit" class="btn btn-primary btn-lg m-2 ">Submit</a>
                </div>

            </form>
        </div>
    </div>
    )
}