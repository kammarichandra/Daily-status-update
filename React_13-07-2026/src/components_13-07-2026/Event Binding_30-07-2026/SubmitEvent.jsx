function SubmitEvent() {

    function handleSubmit(e) {

        e.preventDefault();

        console.log("Form submitted");

    }

    return (

        <form onSubmit={handleSubmit}>

            <input />

            <button> Submit </button>

        </form>

    );

}

export default SubmitEvent;