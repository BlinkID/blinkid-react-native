# -*- encoding: utf-8 -*-
# stub: atomos 0.1.3 ruby lib

Gem::Specification.new do |s|
  s.name = "atomos".freeze
  s.version = "0.1.3"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["Samuel Giddins".freeze]
  s.bindir = "exe".freeze
  s.date = "2018-08-07"
  s.email = ["segiddins@segiddins.me".freeze]
  s.homepage = "https://github.com/segiddins/atomos".freeze
  s.licenses = ["MIT".freeze]
  s.required_ruby_version = Gem::Requirement.new(">= 2.0".freeze)
  s.rubygems_version = "3.4.10".freeze
  s.summary = "A simple gem to atomically write files".freeze

  s.installed_by_version = "3.4.10" if s.respond_to? :installed_by_version

  s.specification_version = 4

  s.add_development_dependency(%q<bundler>.freeze, ["~> 1.16"])
  s.add_development_dependency(%q<rake>.freeze, ["~> 10.0"])
  s.add_development_dependency(%q<rspec>.freeze, ["~> 3.0"])
  s.add_development_dependency(%q<rubocop>.freeze, [">= 0"])
end
