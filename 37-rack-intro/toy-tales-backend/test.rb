class Application
  def call(env)
    if env["PATH_INFO"].match(/hello/)
      return [200, { "Content-Type" => "application/json" }, [{ :message => "hello world!" }.to_json]]
    else
      [404, {}, ["Path not found!!!"]]
    end
  end
end
