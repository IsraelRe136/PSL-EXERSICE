■ How to run the service locally

    run in cmd  npm start you need to have node js installaded (node:16)



■ How to run tests

    npm install --save-dev jest@29.7.0

    npm test


■ How the CI/CD workflow operates
    For CI you need to create new branch based in master, made your changes and push your changes in github you will create a pull request here, i will execute pr-test.yaml to be sure the apllicationn is reamined if this pipeline was succesfull when your branch is merged will continue with CD FILE "deploy-master.yaml" this will build the docker file and push the image to docker hub repo

■ How to deploy on Minikube

    you need to have Docker Desktok open

    run in cmd  "minikube start "

    run in cms "helm install psl-exersice ."

    hold on until the pod is ready  

    run in cmd "kubectl port-forward svc/psl-exersice 3000:80"

    now go to browser and write localhost:3000

    witeh http://localhost:3000/health  or http://localhost:3000/hello to go to the endpoints 