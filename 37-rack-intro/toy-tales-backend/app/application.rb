class Application
  def call(env)
    resp = Rack::Response.new
    req = Rack::Request.new(env)

    if req.path.match(/hello/)
      return [200, { "Content-Type" => "application/json" }, [{ :message => "hello world!" }.to_json]]
    end
  end
end
