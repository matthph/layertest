# Python Layer Test

This Typescript stack uses the '@aws-cdk/aws-lambda-python-alpha' module to deplo a Python Lambda layer.

- The Lambda layer should deploy fine as long as the PIP_INDEX_URL uses https.
- The problem occurs when attempting to change the protocol to http and additionally set the PIP_TRUSTED_HOST argument.

It seems that the PIP_TRUSTED_HOST argument is ignored and the pip request will fail to validate the repository.

#### HTTPS - Deploys:
```
         buildArgs: {
             PIP_INDEX_URL: "https://pypi.python.org/simple/",
         },
```

#### HTTP with Trusted Host Fails:
```
         buildArgs: {
             PIP_INDEX_URL: "https://pypi.python.org/simple/",
             PIP_TRUSTED_HOST: "pypi.python.org"
         },
```

Error: 
```WARNING: The repository located at pypi.python.org is not a trusted or secure host and is being ignored. If this repository is available via HTTPS we recommend you use HTTPS instead, otherwise you may silence this warning and allow it anyway with '--trusted-host pypi.python.org'.```

#### HTTPS with trusted host defined - Deploys and validates that PIP_TRUSTED_HOST is being passed -
```
         buildArgs: {
             PIP_INDEX_URL: "https://pypi.python.org/simple/",
             PIP_TRUSTED_HOST: "pypi.python.org"
         },
```
Result: Deploys, with message:
```[Warning] One or more build-args [PIP_TRUSTED_HOST] were not consumed```