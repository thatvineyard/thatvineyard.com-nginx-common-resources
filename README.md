# thatvineyard.com nginx common resources

This repo holds som resources that are common over many thatvineyard.com project.

## How to include

### Submodule

Submodules can be used if you know you can run the submodule update command. This doesn't work in all pipelines.

First setup:

`git submodule add git@github.com:thatvineyard/thatvineyard.com-nginx-common-resources.git <DIRECTORY LOCATION>`

Update:

`git submodule update --init --recursive`

### Subtree

If you need to bake in the files into the repository then you can use subtree to include the commits from this repo.

First setup:

`git subtree add --prefix=<DIRECTORY LOCATION> git@github.com:thatvineyard/thatvineyard.com-nginx-common-resources.git main --squash`

Update:

`git subtree pull --prefix=<DIRECTORY LOCATION> git@github.com:thatvineyard/thatvineyard.com-nginx-common-resources.git main --squash`

## Favicon

To include the favicon, create a location like this:

```nginx
location /favicon.ico {
    allow all;
    root /etc/nginx; # replace with wherever you place the favicon.ico
    expires max;
    log_not_found off;
}
```

## Errors

To include the error pages, configure your NGINX like this:

```nginx
error_page 403 404 500 502 503 504 @error_redirect;
location @error_redirect {
    rewrite ^ /errors/error.html?code=$status redirect;
}
location /errors/ {
    allow all;
    root /etc/nginx; # replace with wherever you place the error folder
}
```

If you change the location from /error/ to something else then make sure to change in the error.html file.
