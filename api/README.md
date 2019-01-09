# Installation

## Requirements:

- ruby 2.5+
- postgresql

## Getting Started:

- Ubuntu 18.04 LTS 

```
$ cd
$ pwd
/home/ubuntu/

$ mkdir run

$ cat /etc/issue
Ubuntu 18.04 LTS

$ git clone https://github.com/tamura2004/moneta.git
$ cd moneta
$ sudo apt-get update
$ sudo apt-get install -y --no-install-recommends ruby ruby-dev
$ ruby -v
ruby 2.5.1p57 (2018-03-29 revision 63029) [x86_64-linux-gnu]

$ gem -v
2.7.6

$ sudo gem install bundler
$ bundle -v
Bundler version 1.16.2

$ sudo apt-get install -y --no-install-recommends libgdbm-dev build-essential postgresql libpq-dev
$ psql --version
psql (PostgreSQL) 10.3 (Ubuntu 10.4-0ubuntu0.18.04)

$ sudo apt-get install zlib1g-dev
$ rm Gemfile.lock
$ bundle install --without test development --path vendor/bundle

$ sudo su - postgres
$ psql
$ create user tamura with password 'tamura' createdb;

$ RAILS_ENV=production bundle exec rails db:create
$ RAILS_ENV=production bundle exec rails db:migrate
$ RAILS_ENV=production bundle exec rails db:seed_fu

$ bundle exec rails -v
Rails 5.0.7

$ sudo apt-get install nginx
$ nginx -v
nginx version: nginx/1.14.0 (Ubuntu)

$ sudo rm /etc/nginx/sites-enabled/default
$ sudo ln -sf  /home/ubuntu/moneta/api/nginx.conf /etc/nginx/conf.d/nginx.conf
$ sudo nginx -s reload

$ sudo cp /home/ubuntu/moneta/api/puma.service /etc/systemd/system/puma.service
$ sudo vim /etc/systemd/system/puma.service
/
Environment
o
Environment="RAILS_MASTER_KEY=<master.key>"
[Esc]
:wq[Return]

$ sudo systemctl daemon-reload
$ sudo systemctl enable puma.service
$ sudo systemctl start puma.service
$ sudo systemctl status puma.service
```

