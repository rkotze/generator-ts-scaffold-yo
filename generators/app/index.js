"use strict";
const Generator = require("yeoman-generator");
// Const chalk = require("chalk");
const yosay = require("yosay");

module.exports = class extends Generator {
  prompting() {
    this.log(yosay(`TS scaffold YO!`));

    // Const prompts = [
    //   {
    //     type: "confirm",
    //     name: "someAnswer",
    //     message: "(TEST) Would you like to enable this option?",
    //     default: true
    //   }
    // ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    // This.fs.extendJSON(this.destinationPath("package.json"), pkgJson);
    this.fs.copy(
      this.templatePath("package.json"),
      this.destinationPath("package.json")
    );
    this.fs.copy(
      this.templatePath("build/webpack.config.js"),
      this.destinationPath("build/webpack.config.js")
    );
    this.fs.copy(
      this.templatePath("src/index.ts"),
      this.destinationPath("src/index.ts")
    );
  }

  install() {
    this.npmInstall();
  }
};
