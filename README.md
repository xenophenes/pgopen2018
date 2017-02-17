# pgopen2017
PostgresOpen 2017

This site is built by using the PG.EU static deployment tool.

Clone this repo and the PG.EU one from https://git.postgresql.org/gitweb/?p=pgeu-website.git;a=summary

Packages that are needed on a Debian system include:

python
python-jinja2
python-dateutil

Create your own context.override.json by copying the context.json and adjusting
the values as necessary.  For example:

In the context.json there is:

"linkbase": "https://2017.postgresopen.org/",

For delpoying locally, you could copy the context.json to context.override.json and change that to:

"linkbase": "file:///path/to/your/static/directory/2017.postgresopen.org/",

The same for 'mediabase', and also include:

"githash": "",

Then run:

pgeu-website/tools/deploystatic/deploystatic.py `pwd`/pgopen2017 `pwd`/2017.postgresopen.org

The static website should be created into the 2017.postgresql.org directory.
