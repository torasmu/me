import { App, GitHubSourceCodeProvider } from '@aws-cdk/aws-amplify-alpha';
import { SecretValue, Stack, StackProps } from 'aws-cdk-lib';
import { BuildSpec } from 'aws-cdk-lib/aws-codebuild';
import { Construct } from 'constructs';

export class PersonalSiteInfraStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);


    const amplifyApp = new App(this, "personal-site", {
      sourceCodeProvider: new GitHubSourceCodeProvider({
        owner: "torasmu",
        repository: "me",
        // Had to create this secret manually in the console
        oauthToken: SecretValue.secretsManager("github-aws-amplify-token", {
          jsonField: "token",
        }),
      }),
      buildSpec: BuildSpec.fromObject({
        version: '1.0',
        frontend: {
          phases: {
            preBuild: {
              commands: [
                'npm i',
              ],
            },
            build: {
              commands: [
                'npm run build',
              ],
            },
          },
          artifacts: {
            baseDirectory: 'dist',
            files: '**/*',
          },
        },
      })
    });
    const mainBranch = amplifyApp.addBranch("main");
  }
}
