function generateManager(manager) {
    const { name, id, email, officeNum, role } = manager;

    return `
    <div class="card col-4 px-3" style="width: 18rem">
        <div class="card-body">
            <h5 class="card-title text-center">${name}</h5>
            <h6 class="card-subtitle mb-2 text-muted text-center">
              <i class="fas fa-coffee"></i> ${role}
            </h6>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: ${id}</li>
              <li class="list-group-item">
                Email: <a href="mailto: ${email}" class="card-link">${email}</a>
              </li>
              <li class="list-group-item">
                Office number: ${officeNum}
              </li>
            </ul>
        </div>
    </div>
    `;
}
function generateEngineers(engineers) {
    return engineers.map(({ name, id, email, github, role }) => {
        return `
        <div class="card col-4 px-3" style="width: 18rem">
            <div class="card-body">
                <h5 class="card-title text-center">${name}</h5>
                <h6 class="card-subtitle mb-2 text-muted text-center">
                  <i class="fas fa-pencil-ruler"></i> ${role}
                </h6>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">ID: ${id}</li>
                  <li class="list-group-item">
                    Email: <a href="mailto: ${email}" class="card-link">${email}</a>
                  </li>
                  <li class="list-group-item">
                    GitHub: <a href="https://github.com/${github}" class="card-link">${github}</a>
                  </li>
                </ul>
            </div>
        </div>
        `;

    })

}

function generateInterns(interns) {
    return interns.map(({ name, id, email, school, role }) => {
        return `
        <div class="card col-4 px-3" style="width: 18rem">
            <div class="card-body">
                <h5 class="card-title text-center">${name}</h5>
                <h6 class="card-subtitle mb-2 text-muted text-center">
                  <i class="fas fa-user-graduate"></i> ${role}
                </h6>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">ID: ${id}</li>
                  <li class="list-group-item">
                    Email: <a href="mailto: ${email}" class="card-link">${email}</a>
                  </li>
                  <li class="list-group-item">
                    School: ${school}
                  </li>
                </ul>
            </div>
        </div>
        `;

    })

}

function template(manager, engineers, interns) {

    return `
    <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My Team</title>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css"
    />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x"
      crossorigin="anonymous"
    />
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <header>
      <h1 class="page-title">My Team</h1>
    </header>
    <section>
      <div class="row justify-content-center">
        ${generateManager(manager)}
        ${generateEngineers(engineers)}
        ${generateInterns(interns)}
      </div>
    </section>
    </body>
    </html>
    
    `;
}



module.exports = template;