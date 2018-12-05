#regexp_ctor
#test of output of Regexp.new


r=Regexp.new('^\s*[a-zA-Z0-9]')
print("r=",r)
test="    a9B7d0"
print("\ntest=",test)
print("\nr=~test #-> ",r=~test)
print("\nr.match(test) #-> ",r.match(test))