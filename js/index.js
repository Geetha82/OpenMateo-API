
const latitude = 52.52;
const longitude = 13.41;

const apiurl = 'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m';
// site = https://open-meteo.com
// endpoint = /v1/forecast
// ? = everything after the ? is the parameter

fetch(apiurl)
  .then(response => {
        //error fetching data
        if (!response.ok) {
            //throw an error 
            throw new Error("Failed to fetch data from GitHub.Please try again later.");
        }
        //return an response
        return response.json();
    })
    .then((data) => {
        console.log("Data:", data);
    })
    .catch(error => {
        //log the error
        console.error("Error fetching forecast data: ", error);   
    })
        




    // .then((repositories) => {
    //     //repositories.json().parse(this.repositories);
    //     console.log("Repositories:", repositories);
    //     //Get the Projects section
    //     const projectsSection = document.getElementById("Projects");
    //     //Select the list within the Projects section
    //     const projectsList = projectsSection.querySelector("ul");
    //     //Clear the content just in case
    //     projectsList.innerHTML = "";


    //     //Itirate through all the public reposiritories
    //     for (let i = 0; i < repositories.length; i++) {
    //         //Create a new list item for each repository            
    //         const project = document.createElement("li");
    //         //Create a link for the list item
    //         const link = document.createElement("a");
    //         //Set the link url
    //         link.href = repositories[i].html_url;
    //         //Set the text for the link
    //         link.textContent = repositories[i].name;
    //         //Filter out forked repositories
    //         if (repositories[i].fork) {
    //             continue; // Skip forked repositories
    //         }
    //         //Append the link to the project list item
    //         project.appendChild(link);
    //         //Append the list item to the projects list
    //         projectsList.appendChild(project);
    
    //     }

    // })

    // .catch(error => {
    //     //log the error
    //     console.log("Error fetching data from GitHub repositories: ", error);
    //     //Get the Projects section
    //     const projectsSection = document.getElementById("Projects");
    //     //Add an error message on the ui
    //     const errorMessage = document.createElement("p");
    //     errorMessage.innerHTML = "Unable to load projects at this time. Please try again later.";
    //     projectsSection.appendChild(errorMessage);
    // });
