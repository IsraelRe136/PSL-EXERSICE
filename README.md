■ How to Run the Service Locally

    1. Make sure you have Node.js v16 installed.

    2. In the project root, run:

        npm start

■ How to Run Tests

    1. Install test dependencies:

        npm install 


    2. Run the tests:

        npm test

■ How the CI/CD Workflow Operates
    Continuous Integration (CI)

        1. Create a new branch based on master.

        2. Make your changes and push the branch to GitHub.

        3.Open a Pull Request targeting master.

    When the Pull Request is opened or updated:

        - The pr-tests.yml workflow is triggered.

        - All automated tests are executed.

        - If any test fails, the Pull Request cannot be merged.

    Continuous Deployment (CD)

        Once the Pull Request is successfully merged into master, the deploy-master.yml workflow  is triggered.

        This workflow:

            - Builds the Docker image.

            - Pushes the image to Docker Hub.

            - (Optional) Deploys the application to the target environment.

■ How to Deploy on Minikube
    Prerequisites

    - Docker Desktop running

    - Minikube, kubectl, and Helm installed

    Steps

    1. Start Minikube:

        minikube start


    2. Install the application using Helm:

        helm install psl-exercise .


    3. Wait until the pod is ready:

        kubectl get pods


    4. Forward the service port:

        kubectl port-forward svc/psl-exercise 3000:80


    5. Open your browser and access the application:

    - http://localhost:3000

    - Health check: http://localhost:3000/health

    - Hello endpoint: http://localhost:3000/hello