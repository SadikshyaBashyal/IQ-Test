import React from 'react';

function CreateTest() {
    return (
        <div className="create-test-container">
            <h2>Create Your IQ Test</h2>
            <form className="create-test-form">
                <div className="form-group">
                    <label htmlFor="testTitle">Test Title</label>
                    <input type="text" id="testTitle" name="testTitle" placeholder="Enter test title" />
                </div>
                <div className="form-group">
                    <label htmlFor="testDescription">Description</label>
                    <textarea id="testDescription" name="testDescription" placeholder="Describe your test"></textarea>
                </div>
                <button type="submit" className="create-test-btn">Create Test</button>
            </form>
        </div>
    );
}

export default CreateTest; 