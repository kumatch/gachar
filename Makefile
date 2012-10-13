CWD := $(shell pwd)
LIB := $(CWD)/lib

test:
	mocha -r should --reporter spec $(CWD)/test/*.test.js

.PHONY: test
