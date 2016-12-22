# Mozaïk demo dashboards

## Quïck start

- `git clone <repo>`
- `npm i`
- create .env file in project root directory based on .env.sample
    - update values accordingly
- for the first time run `npm run build-assets`
- `npm start`
- go to **host:port**
  (default is *localhost:5000*)
    - **host** is your .env variable MOZAIC\_DASHBOARD\_HOST
    - **port** is MOZAIC\_DASHBOARD\_PORT
- when making changes in code, run `npm run watch` in separate terminal.
  But make sure you ran `npm run build-assets` at least once earlier on.

## Source
This repository is based on [mozaik demo V1](https://github.com/plouc/mozaik-demo)
Link to related [documentation](http://mozaik.rocks/v1/use/)
