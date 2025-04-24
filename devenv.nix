{ pkgs, lib, config, inputs, ... }:

{
  # https://devenv.sh/packages/
  packages = [ pkgs.git pkgs.jetbrains.webstorm ];

  # https://devenv.sh/languages/
  languages = {
    javascript = {
      enable = true;
      npm = {
        enable = true;
        install.enable = true;
      };
    };
  };
}