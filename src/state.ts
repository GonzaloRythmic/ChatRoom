const state = {
    data: {
        email: '',
        fullname: '',
        message: []
    },
    listener: [], 
    // Initializer
    init() {
        // Get the local data
        const localData = JSON.parse(localStorage.getItem("saved-tasks"));
        console.log('Se ha ejecutado el Init State');

        // If localData returns "null", do nothing
        if (!localData) {
            return;
        } else {
            this.setState(localData);
        }
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
        localStorage.setItem("saved-tasks", JSON.stringify(this.data));

        for (const cbFunction of this.listener) {
            cbFunction(newState);
        }
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
