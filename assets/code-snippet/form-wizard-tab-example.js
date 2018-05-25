$("#wizard").steps({
// Disables the finish button (required if pagination is enabled)
enableFinishButton: false, 
// Disables the next and previous buttons (optional)
enablePagination: false, 
// Enables all steps from the begining
enableAllSteps: true, 
// Removes the number from the title
titleTemplate: "#title#" 
});