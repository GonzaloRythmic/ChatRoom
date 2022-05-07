const state = {
    data: {
        email: '',
        fullname: '',
        message: []
    },
    listener: [], 
    // Initializer
    init() {
       
     
    },
    getState(){
        return this.data;
    },
    setEmailAndFullName({email:email, fullname: fullname, message: message}){
        const currentState = this.getState();
        currentState.email = email;
        currentState.fullname = fullname;
        currentState.message = message;
        this.setState(currentState);
    },
   
    setState(newState) {
        this.data = newState;

        // Save the changes made to the state
        // localStorage.setItem('New State', JSON.stringify(this.data));

        for (const cbFunction of this.listener) {
            cbFunction(newState);
        }
        console.log('Me acaban de setear esto:', newState);
    },
    suscribe(callback: (any)=> any ){   //recibe una función (callback)
        this.listener.push(callback);   //agrega lo que tiene que hacer el listener. 
        for (const cb of this.listener) {
            cb();
        }
    },
    

    // Delete task method
    deleteTask(taskId: string) {
        // Get the current state
        const currentState = this.getState();

        // Find the task that needs to be deleted
        const foundTask = currentState.tasks.find(
            (t) => t.id == parseInt(taskId)
        );

        // Change the task deleted property
        foundTask.deleted = true;

        this.setState(currentState);
    },
    changeItemStatus(id: string, value: boolean) {
        // Get the current state
        const currentState = this.getState();

        // Find the task that needs to be changed
        const foundTask = currentState.tasks.find((t) => t.id == parseInt(id));

        // Change the task property
        foundTask.completed = value;

        this.setState(currentState);
    },
};

export {state};
