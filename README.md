## PostgresOpen 2017 Web Site
This site is built by using the PG.EU static deployment tool. Packages that are needed on a Debian system include:
```
python
python-jinja2
python-dateutil
```

## Preparation
First create the target directory and clone this repo and the PG.EU one from https://git.postgresql.org/gitweb/?p=pgeu-website.git;a=summary
```
WORKDIR="/path/to/your/workdir"
cd "${WORKDIR}"
git clone https://github.com/PostgresOpen/pgopen2017.git
git clone https://git.postgresql.org/git/pgeu-website.git
mkdir 2017.postgresopen.org
```

Create your own context.override.json by copying the context.json and adjusting
the values as necessary.  For example:
```
cd "${WORKDIR}/pgopen2017/templates"
cp context.json context.override.json
vi context.override.json
```

In context.override.json there is:
```
"linkbase": "https://2017.postgresopen.org/",
```

For deploying locally, you could change that to:
```
"linkbase": "file:///path/to/your/workdir/2017.postgresopen.org/",
```
The same goes for 'mediabase'. Also add this line to context.override.json following the mediabase line:
```
"githash": "",
```
## Deployment
Finally, run the following to deploy:
```
cd "${WORKDIR}"
pgeu-website/tools/deploystatic/deploystatic.py $(pwd)/pgopen2017 $(pwd)/2017.postgresopen.org
```

The static website should be created into the 2017.postgresql.org directory.
